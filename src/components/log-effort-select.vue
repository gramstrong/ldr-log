
<template>
  <div class="log-form-item-container">
    <label>{{title}}</label>
    <select class="log-form-item">
      <option :class="`${effort.name.toLowerCase()}-run`" v-for="effort in efforts">{{effort.name}}</option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'log-effort-select',

  props: [
    'title',
    'efforts',
    'valid',
    'message',
  ],

}
</script>

