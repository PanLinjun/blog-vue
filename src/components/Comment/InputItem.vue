<template>
  <div v-if="token" class="container">
    <div class="mid">
      <img :src="githubUserAvatar" alt="img" class="avatar">
      <label style="text-align: center; width: 100%">
        <textarea ref="textarea" :style="{'height': height}" v-model="inputContent" placeholder="输入评论..."/>
      </label>
    </div>
    <div class="bottom">
      <button class="button" @click="handleComment" id="commentButton">评论</button>
    </div>
  </div>
  <div v-else class="container">
    <button class="button" @click="handleLogin">登录</button>
  </div>
</template>

<script>
import calcTextareaHeight from '@/utils/calcTextareaHeight'
import { clientID, clientSecret } from '@/settings'
import store from '@/store'
import { addComment } from '@/api/comment'
import { getRefreshToken } from '@/utils/auth'
import { redirect_url } from '@/constant'
import { githubLogout } from '@/api/githubLogin'

export default {
  name: 'InputItem',
  inject: ['reload'],
  props: ['commentInfo'],
  data() {
    return {
      githubUsername: localStorage.getItem('name'),
      githubUserAvatar: localStorage.getItem('avatar_url'),
      inputContent: null,
      postForm: {
        pid: '',
        from_avatar: localStorage.getItem('avatar_url'),
        owner_id: '',
        from_id: '',
        to_id: '',
        content: '',
        like_num: 0
      },
      height: 30,
      token: getRefreshToken()
    }
  },
  watch: {
    inputForm() {
      const el = this.$refs.textarea
      this.height = calcTextareaHeight(el).height
      this.$emit('textContent', this.inputForm)
    }
  },
  methods: {
    setData() {
      const item = this.commentInfo
      if (item) {
        this.postForm.pid = item.pid ? item.pid : item.id
        this.postForm.to_id = item.from_id
      }
      this.postForm.from_id = this.githubUsername
      this.postForm.owner_id = this.$route.query.id
      this.postForm.content = this.inputContent
    },
    handleLogin() {
      const id = this.$route.query.id
      window.location.href = 'https://github.com/login/oauth/authorize?' +
          `client_id=${clientID}&` +
          `redirect_uri=` + redirect_url + `/content?id=${id}`
    },
    handleComment() {
      if (this.inputContent) {
        this.setData()
      }
      addComment(this.postForm).then(response => {
        const { code } = response
        if (code === 0) {
          this.inputContent = null
          this.$store.dispatch('comment/refreshComment')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    background-color: #fafbfc;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 5%;
  }
  textarea {
    width: 98%;
    height: 30px;
    line-height: 30px;
    margin: 10px 0;
    border: 1px solid #f1f1f1;
    outline: none !important;

    &:focus {
      border: 1px solid #0a76a4;
    }
  }

  .mid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0 0 0;

    .avatar {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      margin: 0 20px 0 0;
    }
  }

  .bottom {
    display: flex;
    justify-content: flex-end;

    .button {
      height: 25px;
      width: 50px;
      background-color: #5a5e66;
      color: #ffffff;
      border: none;
    }
  }
</style>
