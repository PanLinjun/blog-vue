<template>
  <div class="card">
    <div class="title">
      <span>标签</span>
    </div>
    <div class="content">
      <div v-for="item in tagList" :key="item.label" class="content-item">
        <span class="item-label" @click="handelFilter(item.label)">{{item.label}}</span>
        <span>{{item.total}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { listTag } from '@/api/article'

  export default {
    name: 'TagCard',
    inject: ['reload'],
    data() {
      return {
        tagList: {},
        listQuery: {}
      }
    },
    mounted() {
      this.getTagList()
    },
    methods: {
      getTagList() {
        listTag().then(response => {
          const {
            data
          } = response
          this.tagList = data
        })
      },
      handelFilter(tag) {
        this.listQuery.tag = tag
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
