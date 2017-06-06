<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Views</h2>
    <ul>
      <li><router-link to="/daily">Daily</router-link></li>
    </ul>
  </div>
</template>

<script>
import router from 'vue-router'

export default {
  name: 'main',
  components: {
    router
  },
  data () {
    return {
      msg: 'Welcome to LDR Log'
    }
  }
}
</script>
