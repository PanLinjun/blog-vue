<template>
  <div class="container">
    <svg-icon icon-class="top" class="top-item" @click="handleTop"/>
  </div>
</template>

<script>
  export default {
    name: 'TopItem',
    methods: {
      handleTop() {
        scrollTo(0, 0)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    background-color: grey;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    position: fixed;
    right: 5%;
    bottom: 5%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #8c939d;
    }

    .top-item {
      height: 20px;
      width: 20px;
      color: #ffffff;
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
