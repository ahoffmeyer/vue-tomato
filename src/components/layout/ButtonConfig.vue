<template>
    <div class="buttonConfig">
        <router-link :to="{ name: 'Config' }">
            <i class="fa fa-cog" aria-hidden="true"></i>
        </router-link>
    </div>
</template>

<script>
    export default {
      name: 'ButtonConfig'
    }
</script>

<style>
    .buttonConfig {
        padding: 2rem;
        position: absolute;
        text-align: right;
        right: 0px;
    }
    .buttonConfig a {
        color: #2c3e50;
        text-decoration: none;
        font-size: 2rem;
        line-height: 2rem;
    }
</style>