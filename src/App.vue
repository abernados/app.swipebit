<template>
  <div id="app">
      <router-view v-show="!user"/>
      <span></span>    
      <component :is="layout" v-show="user">
      <router-view />
    </component>
  </div>
</template>
<script>
const DefaultLayout = "default"

export default {
  data(){
    return {
      isLoggedIn: false,
      user: localStorage.getItem('user')
    }
  },
  created(){
    console.log('Token:' + localStorage.access_token);
    console.log('User:' + localStorage.user);
    this.isLoggedIn =  this.user !== null ? true : false;
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || DefaultLayout) + '-layout'; 
    }
  },
  watch: {
    user(){
      this.isLoggedIn =  localStorage.getItem('user') !== null ? true : false;
    }
  }
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
