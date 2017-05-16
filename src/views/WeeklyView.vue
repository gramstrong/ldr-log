<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .day {
    display: inline-block;
  }
</style>

<template>
  <table>
    <template v-for="day in week">
      <div class="day">{{day}}</div>
    </template>
  </table>
</template>

<script>
export default {
  name: 'WeeklyView',
  data () {
    return {
      week: {
        monday: 1,
        tuesday: 1,
        wednesday: 1,
        thursday: 1,
        friday: 1,
        monday: 1,
        monday: 1,
      }
    }
  }
}
</script>

