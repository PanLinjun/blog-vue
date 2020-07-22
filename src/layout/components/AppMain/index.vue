<template>
  <div class="app-main-container">
    <keep-alive>
      <router-view :key="$route.fullPath"/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="scss" scoped>
  .app-main-container {
    height: 100%;
  }
</style>
