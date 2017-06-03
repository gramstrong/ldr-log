
<style scoped>
  .week-view {
    overflow: auto;
  }

  .week-scroll {
    display: block;
  }
</style>

<template>
  <div class='week-view'>
    <div class='week-scroll'>
      <template v-for="(data, day) in formattedWeek">
      </template>
      <week-navigator :currentDay="this.currentDay"></week-navigator>
      <log-card :title="this.currentDay" :content="this.formattedWeek[this.currentDay]"></log-card>      
    </div>
  </div>
</template>

<script>
import logCard from '@/components/log-card'
import weekNavigator from '@/components/week-navigator'
import queries from '@/queries'
import dateFns from 'date-fns'

export default {
  name: 'Weekly',

  components: {
    logCard,
    weekNavigator
  },

  watch: {
    week: function(newWeek) {
      this.week = this.week || [];
      
      this.formattedWeek = this.week.reduce(function(formattedWeek, log){
       
        var day = dateFns.format(log.runDate, 'dddd');
        formattedWeek[day] = formattedWeek[day] || [];
        formattedWeek[day].push(log);
       
        return formattedWeek;
      }, this.formattedWeek);
    }
  },

  data() {
    return {
      formattedWeek: {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: []
      },
      currentDay: 'Monday',
      weekView: false
    }
  },

  apollo: {
    week: {
      query: queries.getWeek(),
    }
  }
}
</script>

