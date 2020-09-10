<template>
  <div v-if="loading">
    <loading/>
  </div>
  <div class="layout" v-else>
    <top-bar/>
    <app-main/>
  </div>
</template>

<script>
  import TopBar from './components/TopBar'
  import AppMain from './components/AppMain'
  import Loading from '@/components/Loading'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Layout',
    components: {
      TopBar,
      AppMain,
      Loading
    },
    computed: {
      ...mapGetters(['loading'])
    },
  }
</script>

<style lang="scss" scoped>
  .layout {
    height: 100%;
  }
</style>
