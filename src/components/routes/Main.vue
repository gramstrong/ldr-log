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

#loginContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 200px;
}

#loginButton {
  width: 65%;
  height: 40px;
  font-size: 22px;
  border-radius: 10px;
  background-color: #2c3e5045;
  border: 1px solid;
}

#loginButton:hover {
  background-color: #2c3e501c;
}

#loginButton:active {
  color: #FFF;
  background-color: #2c3e50bd;
}

.login-input {
  width: 100%;
  height: 35px;
  margin: 5px;
  border-radius: 10px;
  border: 1px solid #2C3E50;
  font-size: 22px;
  padding: 5px;
  box-sizing: border-box; 
}

.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-input:focus {
  border: 2px solid #95caff;
}

.space {
  height: 100px;
}

</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span class="space"/>    
    <div id="loginContainer">
      <div>
        <input class="login-input" @change="(e) => setValue(e.target.value, 'email')" type="text" placeholder="Email"/>
        <input class="login-input" @change="(e) => setValue(e.target.value, 'password')" type="password" placeholder="Password"/>
      </div>
      <button id="loginButton" @click="signInUser" >Login</button>
    </div>
  </div>
</template>

<script>
import router from 'vue-router';
import queries from '@/queries';

export default {
  name: 'Main',
  components: {
    router
  },
  data () {
    return {
      msg: 'Welcome to LDR Log',
      email: '',      
      password: '',
    }
  },
  methods: {
    setValue: function(value, key){
      this[key] = value;
    },
    signInUser: function(e){
        let a = this.$apollo.mutate({
          mutation: queries.signInUser(this.email, this.password)
        }).then(response => {
          console.log(response);
        }).catch(erro => {
          console.log(response);          
        });
    }
  },

}
</script>
