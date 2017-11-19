<template>
    <div class="config">
        <set-config></set-config>
        <set-time></set-time>
        <set-language></set-language>
    </div>
</template>

<script>
  /**
   * Build the whole view of the config section
   */
  import SetTime from './SetTime'
  import SetLanguage from './SetLanguage'
  import SetConfig from './SetConfig'

  export default {
    name: 'Config',
    components: {
      SetConfig,
      SetTime,
      SetLanguage
    }
  }
</script>