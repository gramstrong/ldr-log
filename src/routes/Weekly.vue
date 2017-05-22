
<style scoped>
  .week-view {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .hard-run {
    background-color: #fd6f6f;
  }

  .easy-run {
    background-color: #95caff;
  }

  .medium-run {
    background-color: #fbfb9b;
  }
</style>

<template>
  <div class='week-view'>
    <template v-for="(data, day) in week">
      <card :title="day" v-bind:class="runType(data.effort)">
        {{data.mileage}}
      </card>
    </template>
  </div>
</template>

<script>
import card from '@/components/card'
import dateFns from 'date-fns'
import gql from 'graphql-tag'

var  weekQuery = function(){
  var today = new Date();
  var beginWeek = dateFns.format(dateFns.startOfWeek(today), 'YYYY-MM-DD');
  var endWeek = dateFns.format(dateFns.endOfWeek(today), 'YYYY-MM-DD');

  return gql`
    query {
      week: allDailyLogs(filter: {
        runDate_gte: "${beginWeek}"
        runDate_lte: "${endWeek}"
      }){
        id
        mileage
        effort
        runDate
      }
    }
  `;
};

export default {
  name: 'Weekly',

  components: {
    card
  },

  methods: {
    runType: function(effort) {
      var efforts = {
        'EASY': 'easy-run',
        'MEDIUM': 'medium-run',
        'HARD': 'hard-run'
      }
      return efforts[effort]
    }
  },

  data () {
    return {
      week: {}
    }
  },

  apollo: {
    week: {
      query: weekQuery(),
      loadingKey: 'loading'
    }
  }
}
</script>

