<template>
    <div class="buttonConfig">
        <router-link :to="{ name: 'Config' }">{{ msg }}</router-link>
    </div>
</template>

<script>
    export default {
      name: 'ButtonConfig',
      data () {
        return {
          msg: 'Button to config'
        }
      }
    }
</script>