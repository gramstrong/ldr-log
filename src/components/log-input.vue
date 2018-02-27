
<style scoped>

  .log-text-area {
    height: 150px;
    font-size: 25px;
  }

</style>

<template>
  <div class="log-form-item-container" :style="containerStyle">
    <label class="log-form-item-label">{{title}}</label>
    <textarea v-if="textarea" @change="onChange" class="log-form-item log-text-area" :type="type" :style="inputStyle"/>
    <input v-else @change="onChange"class="log-form-item" :type="type" :style="inputStyle"/>
  </div>
  
</template>

<script>

export default {
  name: 'log-input',

  props: {
    'title': {},
    'valid': {},
    'message': {},
    'type': {},
    'textarea': {},
    'width': {},
    'labelPosition': {},
    'onChange': {
      default: () => {},
      type: Function
    }
  },

  data(){
    return {
      inputStyle: {
        width: this.width || '80%'
      },
      containerStyle: {
        flexDirection: (this.labelPosition === 'inline' && 'row') || 'column'
      }
    };
  }

}
</script>

