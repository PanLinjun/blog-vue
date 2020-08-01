<template>
  <div class="container">
    <input-item/>
    <div class="comment-wrapper">
      <comment-item v-for="item in commentList" :key="item.id" :commentInfo="item"/>
    </div>
  </div>
</template>

<script>
  import { listComment, addComment } from '@/api/comment'
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
        listComment().then(response => {
          const { data } = response
          this.commentList = data
          console.log(this.commentList)
        })
      },
      handleComment() {
        addComment(this.postForm).then(response => {
          console.log('评论成功')
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
