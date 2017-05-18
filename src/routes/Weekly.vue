
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

export default {
  name: 'Weekly',
  components: {
    card
  },
  methods: {
    runType: function(effort) {
      var efforts = {
        0: 'easy-run',
        1: 'medium-run',
        2: 'hard-run'
      }
      return efforts[effort]
    }
  },
  data () {
    return {
      week: {
        monday: {
          mileage: 4,
          effort : 0
        },
        tuesday: {
          mileage: 5,
          effort : 1
        },
        wednesday: {
          mileage: 3,
          effort : 0
        },
        thursday: {
          mileage: 10,
          effort : 1
        },
        friday: {
          mileage: 2,
          effort : 2
        },
        saturday: {
          mileage: 6,
          effort : 1
        },
        sunday: {
          mileage: 4,
          effort : 1
        }
      }
    }
  }
}
</script>

