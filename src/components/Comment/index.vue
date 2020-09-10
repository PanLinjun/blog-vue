<template>
  <div id="commentContainer" class="container">
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
  import throttle from '@/utils/throttle'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Comment',
    components: {
      CommentItem,
      InputItem
    },
    computed: {
      ...mapGetters(['refreshComment'])
    },
    data() {
      return {
        commentList: [],
        postForm: {
          from_id: '',
          to_id: '',
          content: '',
          pid: ''
        },
        params: {
          owner_id: '',
          page: 1,
          pageSize: 3
        },
        total: 0
      }
    },
    watch: {
      refreshComment: function () {
        this.params.page = 1
        this.listComment()
      }
    },
    mounted() {
      this.listComment()
    },
    methods: {
      listComment() {
        this.params.owner_id = this.$route.query.id
        listComment(this.params).then(response => {
          const { data, total } = response
          if (data) {
            this.commentList = data
            this.total = total
            this.params.page++
            this.scrollRefreshComment()
          }
        })
      },
      scrollRefreshComment() {
        const cp = this
        const fn = function () {
          listComment(cp.params).then( response => {
            const { data } = response
            if (data) {
              cp.commentList.push(...data)
              cp.params.page++
            }
          })
        }
        const throttleListComment = throttle(fn, 500)

        window.onscroll = function () {
          const scrollTop = document.documentElement.scrollTop
          const clientHeight = document.documentElement.clientHeight
          const scrollHeight = document.documentElement.scrollHeight

          if (scrollTop + clientHeight - scrollHeight >= -200) {
            if ((cp.params.page - 1) * cp.params.pageSize < cp.total) {
              throttleListComment()
            } else {
              console.log('没有更多数据')
            }
          }
        }
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
