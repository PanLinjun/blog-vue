<template>
  <div class="layout">
    <top-bar/>
    <app-main/>
  </div>
</template>

<script>
  import TopBar from './components/TopBar'
  import AppMain from './components/AppMain'
  export default {
    name: 'Layout',
    components: {
      TopBar,
      AppMain
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    height: 100%;
  }
</style>
