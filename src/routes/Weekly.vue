
<style scoped>
  .week-view {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>

<template>
  <div class='week-view'>
    <template v-for="(data, day) in formattedWeek">
      <log-card :title="day" :content="data"></log-card>
    </template>
  </div>
</template>

<script>
import logCard from '@/components/log-card'
import queries from '@/queries'
import dateFns from 'date-fns'

export default {
  name: 'Weekly',

  components: {
    logCard
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
      }
    }
  },

  apollo: {
    week: {
      query: queries.getWeek(),
    }
  }
}
</script>

