<template>
  <div id="app">
    <!-- <div class="home mx-auto bg-black text-white py-8">
      <h1 class="text-5xl">Welcome to</h1>
      <logo size="300px" class="mx-auto object-right"></logo>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div> -->
    <router-view />
  </div>
</template>
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
