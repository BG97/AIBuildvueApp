<template>
   <div id="app">
    <header>
      <div class="logo">
          <router-link to='/Home'>Best News</router-link>
      </div>
      <div class="login-register">
          <button><router-link to='/loginPage'>登录</router-link></button>
          <button><router-link to='/registerPage'>注册</router-link></button>
      </div>
  </header>
    <router-view/>

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
