<template>
  <div class="container">
    <input-item/>
    <div class="comment-wrapper">
      <comment-item v-for="item in commentList" :key="item.id" :commentInfo="item"/>
    </div>
  </div>
</template>

<script>
  import { listComment } from '@/api/comment'
  import CommentItem from '@/components/Comment/CommentItem'
  import InputItem from '@/components/Comment/InputItem'

  export default {
    name: 'Comment',
    components: {
      CommentItem,
      InputItem
    },
    data() {
      return {
        commentList: [],
        postForm: {
          from_id: '',
          to_id: '',
          content: '',
          pid: ''
        }
      }
    },
    mounted() {
      this.listComment()
    },
    methods: {
      listComment() {
        const owner_id = this.$route.query.id
        listComment(owner_id).then(response => {
          const { data } = response
          this.commentList = data
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

  .container {
    display: flex;
    flex-direction: column;
  }
</style>
