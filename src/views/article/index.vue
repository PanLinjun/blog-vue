<template>
  <div class="article-page">
    <side-bar-left/>
    <list/>
    <side-bar-right/>
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
  }
</style>
