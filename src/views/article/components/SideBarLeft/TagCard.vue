<template>
  <div v-if="tagList.length !== 0" class="card">
    <div class="title">
      <span>标签</span>
    </div>
    <div class="content">
      <div v-for="item in tagList" :key="item.label" class="content-item">
        <span class="item-label" @click="handelFilter(item.label)">{{item.label}}</span>
        <span class="item-total">{{item.total}}</span>
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
        tagList: [],
        listQuery: {}
      }
    },
    mounted() {
      this.getTagList()
    },
    methods: {
      getTagList() {
        const state = '已发布'
        listTag(state).then(response => {
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
      display: flex;
      flex-wrap: wrap;

      .content-item {
        display: flex;
        align-items: center;
        margin: 0 10px 10px 0;
        background-color: #f5f5f5;
        border: 1px solid #FFFFFF;
        border-radius: 5px;

        .item-label {
          margin: 0 10px 0;
        }
        .item-label:hover {
          cursor: pointer;
        }
        .item-total {
          height: 20px;
          width: 20px;
          background-color: #e7e7e7;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0 5px 5px 0;
        }
      }
    }
  }
</style>
