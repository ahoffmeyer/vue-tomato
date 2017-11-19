<template>
    <div class="timer">
        <div class="time">
            {{ time }}
        </div>
        <div class="pause-play-btn">
            <start v-if="! running"></start>
            <stop v-if="running"></stop>
            <reset></reset>
        </div>
    </div>
</template>

<script>
    /**
    * Build the whole timer view with start and stop button
    */
    import Start from './Start'
    import Stop from './Stop'
    import Reset from './Reset'
    import { mapGetters } from 'vuex'

    export default {
      name: 'Timer',
      computed: mapGetters({
        time: 'getTime',
        running: 'getRunning'
      }),
      data () {
        return {
          msg: 'Timer'
        }
      },
      components: {
        Start,
        Stop,
        Reset
      }
    }
</script>

<style>
    .time {
        font-size: 6rem;
    }
    .start, .reset, .stop {
        display: inline-block;
        padding: .3rem;
    }
</style>