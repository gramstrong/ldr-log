<style>
  body {
    overflow: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #appHeader {
    background-color: #41B883;
    height: 100px;
    margin-bottom: 40px;
  }

  .hard-run {
    background-color: #fd6f6f;
  }

  .easy-run {
    background-color: #95caff;
  }

  .medium-run {
    background-color: #fbfb9b;
  }
</style>

<template>
  <div id="app">
    <div id="appHeader">
      <h1 class="ldr-title">LDR Log</h1>
    </div>
    <router-view></router-view> 
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
