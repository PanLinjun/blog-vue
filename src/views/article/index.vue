<template>
  <div class="article-page">
    <side-bar-left class="sidebar"/>
    <list class="list"/>
    <side-bar-right class="sidebar"/>
  </div>
</template>

<script>
  import SideBarLeft from './components/SideBarLeft'
  import SideBarRight from './components/SideBarRight'
  import List from './components/List'

  export default {
    name: 'Article',
    components: {
      SideBarLeft,
      SideBarRight,
      List
    }
  }
</script>

<style lang="scss" scoped>
  .article-page {
    display: flex;
    justify-content: space-between;
    padding: 0 15%;

    .sidebar {
      width: 250px;
    }

    .list {
      width: 800px;
    }
  }
</style>
