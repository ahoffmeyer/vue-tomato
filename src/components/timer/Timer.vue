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
        <div class="tomatoes">
            <ul>
                <li v-for="tomato in getTomatoes"><img class="tomato" src="../../assets/tomato.svg" /></li>
            </ul>
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
        progressW: 'getPercentageW',
        getTomatoes: 'getTomatoes'
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
    .tomatoes {
        position: fixed;
        bottom: 0px;
        left: 0px;
        padding: 2rem;
    }
    .tomatoes ul, .tomatoes li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .tomatoes li {
        display: inline-block;
        padding: 0 10px 0 0;
    }
    .tomato {
        height:35px;
        width: 35px;
    }
</style>