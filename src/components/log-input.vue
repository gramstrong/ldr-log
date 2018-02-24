
<style scoped>

  .log-text-area {
    width: 75%;
    height: 150px;
    font-size: 25px;
  }

</style>

<template>
  <div class="log-form-item-container">
    <label>{{title}}</label>
    <textarea v-if="textarea" class="log-form-item log-text-area" :type="type"/>
    <input v-else class="log-form-item" :type="type"/>
  </div>
  
</template>

<script>

export default {
  name: 'log-input',

  props: [
    'title',
    'valid',
    'message',
    'type',
    'textarea'
  ],

}
</script>

