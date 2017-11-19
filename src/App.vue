<template>
  <div id="app">
    <nav>
      <button-config></button-config>
    </nav>
    <div class="app">
      <router-view />
    </div>
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
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  #app {
    height: 100%;
    position: relative;
  }
  .app {
    position: absolute;
    width: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pause-play {
    font-size: 2rem;
    line-height: 2rem;
    color: #2c3e50;
    text-decoration: none;
    cursor: pointer;
  }
  nav {
    padding: 2rem;
    position: absolute;
    z-index: 99;
    text-align: right;
    right: 0px;
  }
  nav a {
    color: #2c3e50;
    text-decoration: none;
    font-size: 2rem;
    line-height: 2rem;
  }
</style>
