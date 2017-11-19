<template>
    <div class="setTime">
        <h1>Time Set to {{ currentTime }} minutes</h1>
        <label for="time">Select your timer duration
            <select id="time" class="custom-select" v-model.bind="time" @change="setTime(time)">
                <!-- inline object literal -->
                <option value="">---</option>
                <option v-for="time in times" :value="time">{{ time }} Minutes</option>
            </select>
        </label>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'SetTime',
    computed: mapGetters({
      times: 'getTimes',
      currentTime: 'getTime'
    }),
    data () {
      return {
        time: 0,
        msg: 'Config Template'
      }
    },
    methods: mapActions([
      'setTime'
    ])
  }
</script>

<style scoped>
    select { min-width: 100px; }
</style>