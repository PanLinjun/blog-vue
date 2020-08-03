<template>
  <div class="app-main-container">
    <keep-alive>
      <router-view :key="$route.fullPath"/>
    </keep-alive>
    <top-item/>
    <logout-button/>
  </div>
</template>

<script>
import TopItem from '@/components/TopItem'
import LogoutButton from '@/components/LogoutButton'

export default {
  name: 'AppMain',
  components: {
    TopItem,
    LogoutButton
  }
}
</script>

<style lang="scss" scoped>
  .app-main-container {
    height: 100%;
  }
</style>
