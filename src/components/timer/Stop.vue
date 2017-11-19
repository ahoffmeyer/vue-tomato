<template>
    <div class="stop">
        <a @click="stopTimer" class="pause-play">
            <i class="fa fa-pause" aria-hidden="true"></i>
        </a>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Stop',
    data () {
      return {
        msg: 'Stop'
      }
    },
    methods: mapActions([
      'stopTimer'
    ])
  }
</script>