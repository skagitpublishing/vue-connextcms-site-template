<template>
  <div id="app" style="border: 1px solid black">
    <img src="./assets/logo.png">
    <left-menu></left-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  
  import LeftMenu from './components/LeftMenu'
  
  export default {
    name: 'app',
    components: {
      LeftMenu
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
