<template>
  <div class="card">
    <div class="title">
      <span>分类</span>
    </div>
    <div class="content">
      <div v-for="item in categoryList" :key="item.label" class="content-item">
        <span class="item-label">{{item.label}}</span>
        <span>{{item.total}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { getCategory } from '@/api/article'

  export default {
    name: 'CategoryCard',
    data() {
      return {
        categoryList: {}
      }
    },
    mounted() {
      this.getCategoryList()
    },
    methods: {
      getCategoryList() {
        getCategory().then(response => {
          const {
            data
          } = response.data
          this.categoryList = data
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    width: 250px;
    padding: 10px 0;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 2px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16);

    .title {
      margin: 0 20px 10px;
      font-size: 0.5rem;
    }

    .content {
      margin: 0 40px;

      .content-item {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;

        .item-label:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>
