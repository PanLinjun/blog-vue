<template>
  <div class="container">
    <div class="title-wrapper">
      <div class="info">
        <div class="tag">
          <span v-for="item in article.tag" :key="item" class="tag-item">{{item}}</span>
        </div>
        <div class="title">
          <span>{{article.title}}</span>
        </div>
        <div class="author">
          <span>Posted by {{article.author}} on {{article.createDate}}</span>
        </div>
      </div>
    </div>

    <div class="content-wrapper">
      <span v-html="article.content"></span>
    </div>
  </div>
</template>

<script>
  import { getArticle } from '@/api/article'

  export default {
    name: 'Content',
    data() {
      return {
        article: {}
      }
    },
    mounted() {
      this.getArticleData()
    },
    methods: {
      getArticleData() {
        const { id } = this.$route.query
        getArticle(id).then(response => {
          const { data } = response
          this.article = data
          this.article.tag = this.article.tag.split(',')
          console.log(this.article)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    height: 100%;
  }

  .content-wrapper {
    padding: 0 25%;
  }

  .title-wrapper {
    height: 300px;
    width: 100%;
    /*background-image: url('../../assets/img/2.jpg');*/
    background-size: cover;
    background-color: #333333;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;

    .info {
      width: 100%;
      padding: 0 25%;

      .tag {
        .tag-item {
          margin: 0 10px 0 0;
          padding: 0 10px;
          border: 1px solid #FFFFFF;
          border-radius: 10px;
        }
      }

      .title {
        font-size: 3rem;
        margin: 20px 0;
      }

      .author {
        font-size: 1.2rem;
      }
    }
  }
</style>
