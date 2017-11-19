<template>
  <div class="home">
    <h1>HOME</h1>
    <timer></timer>
  </div>
</template>

<script>
  import Timer from './timer/Timer'

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      Timer
    }
  }
</script>

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
