<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .week-navigator{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 35px;
    font-size: 2em;    
  }

  .nav {
    margin: 0 8px 0 8px;
  }

  .nav:after{
    content:"";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.5em;
    border-top: 1px solid black;
    z-index: -1;
  }
</style>

<template>
  <div class='week-navigator'>
    <template v-for="day in week">
        <div class='nav day'>{{day}}</div>
    </template>
    <div class='nav'>…</div>
  </div>
</template>

<script>
export default {
  name: 'week-navigator',

  data() {
      return {
        currentDay: 'Monday',
        week: ['M','T', 'W', 'Th', 'F', 'S', 'Su']
      };
  }

}
</script>

