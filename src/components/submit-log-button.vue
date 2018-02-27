<style scoped>

  #submitButton {
    height: 60px;
    width: 200px;
    border-radius: 5px;
    background-color: #2C3E50;
    font-size: 30px;
    color: #fff;
  }

</style>

<template>
  <button id="submitButton" @click="submit">Submit</button>
</template>

<script>
import queries from '@/queries';

export default {
    
  name: 'submit-log-button',

  props: [
    'date',
    'mileage',
    'minutes',
    'effort',
    'notes',
    'onSubmit'
  ],

  apollo: {},

  methods: {
    submit: function() {
      this.$apollo.mutate({
        mutation: queries.createLog(this.date, this.mileage, this.minutes, this.effort, this.notes)
      });
      this.onSubmit();
    }
  }
}
</script>

