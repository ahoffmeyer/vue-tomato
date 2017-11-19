<template>
    <div class="start">
        <a @click="startTimer" class="pause-play">
            <i class="fa fa-play" aria-hidden="true"></i>
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