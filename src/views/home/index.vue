<template>
  <div class="home-container">
    <div class="info-container">
      <div class="avatar-wrapper">
        <img :src="'/api' + '/img/' + avatar" alt="avatar" class="avatar">
      </div>
      <h1>Pan Linjun</h1>
      <p class="skills-tag-wrapper">
        HTML
        <span class="circle-seperator"></span>
        CSS
        <span class="circle-seperator"></span>
        JavaScript
        <span class="circle-seperator"></span>
        Vue.js
        <span class="circle-seperator"></span>
        Webpack
      </p>
      <div class="info-wrapper">
        <div v-for="item in articleInfo" :key="item.label" class="info-item">
          <span>{{item.label}}</span>
          <span class="count-text">{{item.value}}</span>
        </div>
      </div>
      <router-link to="/article" class="button-wrapper">
        <button class="button-item">Enter the blog</button>
      </router-link>
      <div class="icon-wrapper">
        <a href="https://github.com/PanLinjun" target="_blank">
          <svg-icon icon-class="github" class="icon-github icon-item"></svg-icon>
        </a>
        <a href="mailto:panlinjun1996@gmail.com">
          <svg-icon icon-class="email" class="icon-email icon-item"></svg-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { listArticle, getCategory, listTag } from '@/api/article'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Home',
    components: {
    },
    computed: {
      ...mapGetters([
        'username',
        'avatar'
      ])
    },
    created() {
      this.$store.dispatch('admin/getInfo')
    },
    data() {
      return {
        articleCount: 0,
        articleInfo: {
          articleCount: {
            label: '文章',
            value: 0
          },
          categoryCount: {
            label: '分类',
            value: 0
          },
          tagCount: {
            label: '标签',
            value: 0
          }
        },
        list: null
      }
    },
    mounted() {
      this.getArticleList()
      this.getCategoryList()
      this.getTagList()
    },
    methods: {
      getArticleList() {
        listArticle().then(response => {
          const {
            data,
            total
          } = response.data
          this.list = data
          this.articleInfo.articleCount.value = total
        })
      },
      getCategoryList() {
        getCategory().then(response => {
          const {
            data
          } = response.data
          console.log(data)
          this.articleInfo.categoryCount.value = data.length
        })
      },
      getTagList() {
        listTag().then(response => {
          const {
            data
          } = response.data
          this.articleInfo.tagCount.value = data.length
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home-container {
    height: 100%;
    display: flex;
    justify-content: center;

    .info-container {
      display: inline-block;
      background-color: #ffffff;
      margin: 10% 0;
      height: 420px;
      width: 640px;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 1s cubic-bezier(.25,.8,.25,1);
      text-align: center;

      &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      }

      .avatar {
        display: inline-block;
        width: 100px;
        height: 100px;
        margin: 12px;
        border: 4px solid #fff;
        border-radius: 50%;
      }

      h1 {
        font-size: 1.5em;
      }

      .skills-tag-wrapper {
        margin: 20px 0 30px;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .circle-seperator {
          display: inline-block;
          width: 4px;
          height: 4px;
          margin: 0 10px;
          background-color: #0E0E0E;
          border-radius: 50%;
        }
      }

      .info-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        .info-item {
          display: flex;
          flex-direction: column;
          margin: 0 40px;

          span {
            margin: 5px 0;
          }

          .count-text {
            font-size: 2rem;
          }
        }
      }

      .button-item {
        width: 300px;
        height: 30px;
        margin: 10px 0;
        border: none;
        border-radius: 15px;
        background-color: #3073DC;
        color: #ffffff;

        &:focus,
        &:hover {
          cursor: pointer;
          background-color: #2196F3;
          transition: all 2s cubic-bezier(.25,.8,.25,1);
        }
      }

      .icon-wrapper {
        margin: 10px 0;

        .icon-item {
          margin: 0 10px;
        }

        .icon-github {
          height: 20px;
          width: 20px;
        }

        .icon-email {
          height: 18px;
          width: 18px;
        }
      }
    }
  }
</style>
