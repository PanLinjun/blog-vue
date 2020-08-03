<template>
  <div class="container">
    <svg-icon icon-class="top" class="top-item"/>
  </div>
</template>

<script>
export default {
name: 'TopItem'
}
</script>

<style lang="scss" scoped>
  .container {
    //height: 100%;

    .top-item {
      background-color: #13ce66;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      position: absolute;
      right: 50px;
      bottom: 10px;
    }
  }
</style>
