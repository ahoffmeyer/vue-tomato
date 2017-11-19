<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button-config></button-config>
    <router-view/>
  </div>
</template>

<script>
  import ButtonConfig from './components/layout/ButtonConfig'

  export default {
    name: 'app',
    components: {
      ButtonConfig
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
  margin-top: 60px;
}
</style>
