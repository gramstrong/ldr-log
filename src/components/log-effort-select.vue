
<template>
  <div class="log-form-item-container">
    <label class="log-form-item-label">{{title}}</label>
    <select @change="onChange" class="log-form-item">
      <option :class="`${effort.name.toLowerCase()}-run`" v-for="effort in efforts">{{effort.name}}</option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'log-effort-select',

  props: {
    'title': {},
    'efforts': {},
    'valid': {},
    'message': {},
    'onChange': {
      default: () => {},
      type: Function
    }
  },
}
</script>

