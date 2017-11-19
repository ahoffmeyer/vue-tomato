<template>
    <div class="start">
        <a @click="resetTimer" class="pause-play">
            <i class="fa fa-repeat" aria-hidden="true"></i>
        </a>
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