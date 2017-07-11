
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
    border-radius: 50px;
    transition: transform .7s;
    padding: 0 10%;
  }

  .rotated {
    transform: rotate(135deg);
  }

  .add-form {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 105px;
    background-color: none;
    transition: border-top-color .7s, height .7s;
    border-top: 1px solid;    
    border-top-color: #FFF;
    background-color: #FFF;    
  }

  .add-form-adding {
    border-top-color: #000;
    height: 65vh;
  }
</style>

<template>
  <div class='day-view'>
      <template v-for="(data, day) in formattedWeek">
      </template>
      <week-navigator class="week-navigator" :current-day="this.currentDay" :on-navigate="setCurrentDay"></week-navigator>      
      <log-card :title="this.currentDay" :content="this.formattedWeek[this.currentDay]"></log-card>     
      <div :class="{'add-form': true, 'add-form-adding': adding}">
        <img v-on:click="adding = !adding" :class="{
          'add-log-button': true,
          'rotated': adding
        }" src="../../assets/add-log-button.svg" height="60"/>
      </div>
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

