<template>
    <div class="start">
        <a @click="startTimer">
            {{ msg }}
        </a>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
      name: 'Start',
      data () {
        return {
          msg: 'Start'
        }
      },
      methods: mapActions([
        'startTimer', 'countDownTimer'
      ])
    }
</script>