<template>
  <div class="home">
    <timer></timer>
  </div>
</template>

<script>
  import Timer from './timer/Timer'

  export default {
    components: {
      Timer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
  }
</style>
