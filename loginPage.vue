<template>
    <div>
      <header>
        <div class="logo">
          <a href="#">登录</a>
        </div>
        <nav>
          <div class="login-register">
            <a>Login</a>
            <a>Register</a>
          </div>
        </nav>
      </header>
  
      <main>
        <h1>Login</h1>
        <form @submit.prevent="login">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required v-model="username">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required v-model="password">
          <button type="submit">Login</button>
        </form>
        <button id="return-to-index"><router-link to="/Home">返回主页</router-link></button>
      </main>
    </div>
  </template>
  
  <script>


  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Add your login logic here
        console.log('Login clicked');
      },
    },

  };
  </script>
  
  <style scoped>
  /* Style the header */
  header {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  
  .logo a {
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
  }
  
  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  nav li {
    margin: 0 10px;
  }
  
  nav a {
    text-decoration: none;
    color: #fff;
  }
  
  nav.dropdown {
    position: relative;
  }
  
  nav.dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  nav.dropdown:hover .dropdown-content {
    display: block;
  }
  
  nav.dropdown-content a {
    color: #333;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  nav.dropdown-content a:hover {
    background-color: #f1f1f1;
  }
  
  /* Style the main content */
  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  input[type="text"],
  input[type="password"] {
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }
  
  button[type="submit"] {
    background-color: #333;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button[type="submit"]:hover {
    background-color: #555;
  }
  
  /* Style the "Return to Index" button */
  #return-to-index {
    background-color: #333;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;
  }
  
  #return-to-index:hover {
    background-color: #555;
  }
  </style>
  