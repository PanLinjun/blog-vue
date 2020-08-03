<template>
  <div v-if="hotArticleList.length !== 0" class="card">
    <div class="title">
      <span>热门文章</span>
    </div>
    <div class="content">
      <div v-for="item in hotArticleList" :key="item.id" class="content-item">
        <router-link :to="{path: '/content', query: {id: item.id}}">
          <span @click="handleClick(item)">{{item.title}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { listArticle } from '@/api/article'

  export default {
    name: 'CategoryCard',
    inject: ['reload'],
    data() {
      return {
        hotArticleList: [],
        listQuery: {}
      }
    },
    mounted() {
      this.listHotArticle()
    },
    methods: {
      listHotArticle() {
        const sort = {
          sort: '-click'
        }
        listArticle(sort).then(response => {
          const { data } = response
          this.hotArticleList = data
        })
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
