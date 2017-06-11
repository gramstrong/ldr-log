
<style scoped>
  .day-view {
    overflow: none;
    height: 100%;
  }

  .week-navigator {
    margin-bottom: 10%;
  }

  .log-actions {
    margin-top: 10%
  }

  .add-log-button {
    cursor: pointer;    
    margin-top: 10%;
    border-radius: 50px;
    margin-left: 70%;
    transition: transform .7s;
  }

  .rotated {
    transform: rotate(135deg);
  }
</style>

<template>
  <div class='day-view'>
      <template v-for="(data, day) in formattedWeek">
      </template>
      <week-navigator class="week-navigator" :current-day="this.currentDay" :on-navigate="setCurrentDay"></week-navigator>      
      <log-card :title="this.currentDay" :content="this.formattedWeek[this.currentDay]"></log-card>     
      <img v-on:click="adding = !adding" :class="{
        'add-log-button': true,
        'rotated': adding
      }" src="../assets/add-log-button.svg" height="60"/>
  </div>
</template>

<script>
import logCard from '@/components/log-card';
import weekNavigator from '@/components/week-navigator';
import queries from '@/queries';
import dateFns from 'date-fns';

export default {
  name: 'Day',

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
    },
  },

  methods: {
    setCurrentDay: function(newCurrentDay){
      this.currentDay = newCurrentDay;
    },
  },

  data() {
    return {
      formattedWeek: {
        'Monday': [],
        'Tuesday': [],
        'Wednesday': [],
        'Thursday': [],
        'Friday': [],
        'Saturday': [],
        'Sunday': []
      },
      currentDay: 'Monday',
      adding: false
    }
  },

  apollo: {
    week: {
      query: queries.getWeek(),
    }
  }
}
</script>

