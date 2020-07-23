<template>
  <div v-if="categoryList.length !== 0" class="card">
    <div class="title">
      <span>分类</span>
    </div>
    <div class="content">
      <div v-for="item in categoryList" :key="item.label" class="content-item">
        <span class="item-label" @click="handelFilter(item.label)">{{item.label}}</span>
        <span>{{item.total}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { getCategory } from '@/api/article'

  export default {
    name: 'CategoryCard',
    inject: ['reload'],
    data() {
      return {
        categoryList: [],
        listQuery: {}
      }
    },
    mounted() {
      this.getCategoryList()
    },
    methods: {
      getCategoryList() {
        const state = '已发布'
        getCategory(state).then(response => {
          const {
            data
          } = response
          this.categoryList = data
          console.log(this.categoryList)
        })
      },
      handelFilter(category) {
        this.listQuery.category = category
        this.$router.push({
          path: '/article',
          query: this.listQuery
        }).catch(() => {})
        this.reload()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
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
