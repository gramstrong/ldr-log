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
    background-color: #2C3E50;
    color: #fff;
    height: 100px;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 75px auto 75px;
  }

  #home {
    display: flex;
    flex-direction: column;
  }

  #homeIcon {
    margin: 18px 0 0 20px;
  }

  .hard-run {
    background-color: #ca0c0c8f;
  }

  .easy-run {
    background-color: #95caff;
  }

  .medium-run {
    background-color: #2268007d;
  }
</style>

<template>
  <div id="app">
    <div id="appHeader">
      <div id="home">
        <!-- <img id="homeIcon" src="./assets/home.svg" height="45"/>     -->
      </div>
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
