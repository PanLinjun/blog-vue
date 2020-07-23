<template>
  <div class="sidebar">
    <hot-article-card class="card"/>
  </div>
</template>

<script>
  import HotArticleCard from './HotArticleCard'

  export default {
    name: 'SideBarRight',
    components: {
      HotArticleCard
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    display: inline-block;
  }
</style>
