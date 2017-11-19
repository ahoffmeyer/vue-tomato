<template>
    <div class="timer">
        <div class="progress-bar">
            <div class="progress">
                <div class="progress-bar bg-danger" :style="progressW" role="progressbar" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
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
        running: 'getRunning',
        progress: 'getProgress',
        progressW: 'getPercentageW'
      }),
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
    .progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        height: 15px;
        background: #eee;
        width: 100%;
        height: 15px;
    }
</style>