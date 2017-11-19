<template>
    <div class="stop">
        <a @click="stopTimer">
            {{ msg }}
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