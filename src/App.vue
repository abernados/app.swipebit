<template>
  <div id="app">
    <!-- <div class="home mx-auto bg-black text-white py-8">
      <h1 class="text-5xl">Welcome to</h1>
      <logo size="300px" class="mx-auto object-right"></logo>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div> -->
    <router-view v-show="!isLoggedIn"/>

    <component :is="layout" v-show="isLoggedIn">
      <router-view />
    </component>
  </div>
</template>
<script>
const DefaultLayout = "default"

export default {
  data(){
    return {
      isLoggedIn: false
    }
  },
  created(){
    console.log(localStorage.getItem('token'));
      this.isLoggedIn =  localStorage.getItem('token') !== null ? true : false;
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || DefaultLayout) + '-layout'; 
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
