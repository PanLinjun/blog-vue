<template>
  <div class="container">
    <div class="title-wrapper">
      <span class="title">About</span>
    </div>

    <div class="content-wrapper">
      <div class="content-title">
        关于博客
      </div>
      <div class="content">
        第一个项目
      </div>

      <div class="content-title">
        关于博主
      </div>
      <div class="content">
        PanLinjun
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Content',
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}

.title-wrapper {
  height: 300px;
  width: 100%;
  background-size: cover;
  background-color: #333333;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 4rem;
    margin: 20px 0;
  }
}

.content-wrapper {
  padding: 40px 25%;

  .content-title {
    font-size: 1.5rem;
    font-weight: 550;
  }

  .content {
    font-size: 1.2rem;
    margin: 20px;
  }
}
</style>
