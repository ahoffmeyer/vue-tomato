<template>
    <div class="timer">
        {{ time }}
        <start v-if="! running"></start>
        <stop v-if="running"></stop>
        <reset></reset>
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