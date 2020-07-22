<template>
  <div class="container">
    <div v-for="item in list" :key="item.title">
      <div class="list-item">
        <div class="img-wrapper">
          <img src="@/assets/img/2.jpg" style="height: 100%; width: 100%">
        </div>
        <div class="content-wrapper">
            <span class="text">{{item.createDate}}</span>
            <span class="text">{{item.category}}</span>
            <h1>{{item.title}}</h1>
            <div class="tag-wrapper">
              <div v-for="tagItem in item.tag" :key="tagItem" class="tag-item">
                <span>{{tagItem}}</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { listArticle } from '@/api/article'

  export default {
    name: 'List',
    data() {
      return {
        listQuery: {},
        list: {}
      }
    },
    mounted() {
      this.getList()
    },
    methods: {
      getList() {
        let listQuery = {}
        listQuery = Object.assign(this.listQuery, this.$route.query)
        listArticle(listQuery).then(response => {
          const {
            data
          } = response
          this.list = data
          this.list = this.list.map(article => {
            article.tag = article.tag.split(',')
            return article
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list-item {
    overflow: hidden;
    height: 350px;
    margin: 0 0 10px;
    border: 1px solid #FFFFFF;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16);

    .img-wrapper {
      width: 100%;
      height: 60%;
      overflow: hidden;
    }

    .content-wrapper {
      margin: 20px;

      .top-info {
        .text {
          margin: 0 10px 0 0;
        }
      }

      .tag-wrapper {
        .tag-item {
          display: inline-block;
          margin: 0 10px 0 0;
        }
      }
    }
  }
</style>
