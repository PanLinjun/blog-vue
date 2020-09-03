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
            <router-link :to="{path: '/content', query: {id: item.id}}">
              <h1 @click="handleClick(item)">{{item.title}}</h1>
            </router-link>
            <div class="bottom">
              <div class="tag-wrapper">
                <div v-for="tagItem in item.tag" :key="tagItem" class="tag-item">
                  <span>{{tagItem}}</span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <pagination v-if="list.length !== 0" :pageSize="listQuery.pageSize" :page="listQuery.page" :listLength="list.length" :total="list.total"/>
  </div>
</template>

<script>
  import { listArticle, updateArticle } from '@/api/article'
  import Pagination from '@/components/Pagination'

  export default {
    name: 'List',
    components: {
      Pagination
    },
    data() {
      return {
        listQuery: {
          state: '已发布',
          page: 1,
          pageSize: 2
        },
        list: []
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
            data,
            page,
            total
          } = response
          this.list = data
          this.list = this.list.map(article => {
            article.tag = article.tag.split(',')
            return article
          })
          this.listQuery.page = page
          this.list.total = total
        })
      },
      handleClick(item) {
        item.click++
        updateArticle(item)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .list-item {
    overflow: hidden;
    height: 350px;
    margin: 0 0 10px;
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
          padding: 0 10px;
          border: 1px solid #2b2f3a;
          border-radius: 10px;
        }
      }
    }
  }
</style>
