<template>
  <div class="app-main-container">
    <keep-alive>
      <router-view :key="$route.fullPath"/>
    </keep-alive>
    <top-item/>
  </div>
</template>

<script>
import TopItem from '@/components/TopItem'

export default {
  name: 'AppMain',
  components: {
    TopItem
  }
}
</script>

<style lang="scss" scoped>
  .app-main-container {
    height: 100%;
  }
</style>
