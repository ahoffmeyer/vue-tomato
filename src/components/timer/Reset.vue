<template>
    <div class="start">
        <a @click="resetTimer">{{ msg }}</a>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
      name: 'Reset',
      data () {
        return {
          msg: 'Reset'
        }
      },
      methods: mapActions([
        'resetTimer'
      ])
    }
</script>