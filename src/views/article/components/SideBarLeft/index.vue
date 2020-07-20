<template>
  <div>
    <category-card/>
    <tag-card/>
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

<style scoped>

</style>
