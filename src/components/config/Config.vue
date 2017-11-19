<template>
    <div class="config">
        <set-time></set-time>
    </div>
</template>

<script>
  /**
   * Build the whole view of the config section
   */
  import SetTime from './SetTime'
  import SetLanguage from './SetLanguage'

  export default {
    name: 'Config',
    components: {
      SetTime,
      SetLanguage
    }
  }
</script>