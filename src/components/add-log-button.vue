<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>

<template>
    <div class="add-log-button">

    </div>
</template>

<script>
export default {
  name: 'card',

  props: [
    'title',
    'content'
  ],

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

}
</script>

