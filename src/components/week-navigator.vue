<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .week-navigator{
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 2em;    
  }

  .nav {
    width: 12%;
    position: relative;
  }

  .nav:hover {
    cursor: pointer;
  }

  .nav-border {
    border-left: solid 1px rgba(0,0,0,0.2);
  }

  .selected {
    height: 10px;
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .selected-border {
    border-bottom: solid 2px rgba(0,0,0, 0.6);
    border-radius: 3px;
  }
</style>

<template>
  <div class='week-navigator'>
    <template v-for="(nav, day) in week">
        <div :class="navClasses(day)" v-on:click="(e) => onNavigate(e.currentTarget.getAttribute('day'))" :day="day">
          {{nav}}
          <div :class="selectedClasses(day)"></div>
        </div>
    </template>
    <div class='nav nav-border'>…</div>
  </div>
</template>

<script>
import dateFns from 'date-fns';

export default {
  name: 'week-navigator',

  data() {
      return {
        week: {
          'Monday': 'M',
          'Tuesday': 'T', 
          'Wednesday': 'W', 
          'Thursday': 'Th', 
          'Friday': 'F', 
          'Saturday': 'S', 
          'Sunday': 'Su'
          }
      };
  },

  props: ['onNavigate', 'currentDay'],

  mounted: function(){
    this.onNavigate(this.currentDay);
  },

  watch: {
    currentDay: function(newCurrentDay){
      this.onNavigate(newCurrentDay);
    }
  },

  methods: {
    navClasses: function(day){
      var classes = 'nav ';
      classes += day !== 'Monday' ? 'nav-border ' : '';

      return classes;
    },
    selectedClasses: function(day){
      var classes = 'selected ';      
      return classes += day === this.currentDay ? 'selected-border' : ''
    }
  }

}
</script>

