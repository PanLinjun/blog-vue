<template>
  <div class="container">
    <category-card class="card"/>
    <tag-card class="card"/>
  </div>
</template>

<script>
  import TagCard from './TagCard'
  import CategoryCard from './CategoryCard'

  export default {
    name: 'SideBarLeft',
    components: {
      CategoryCard,
      TagCard
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    margin: 0 0 20px;
  }
</style>
