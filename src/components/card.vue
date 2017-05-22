<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    display: inline-block;
    height: 250px;
    width: 250px;
    border: solid black 1px;
    margin: 5px;
  }
</style>

<template>
  <div class="card">
    <h3>{{title}}</h3>
    <slot>This will only be displayed if no content is inserted</slot>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: [
    'title'
  ],

}
</script>

