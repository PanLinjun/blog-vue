<template>
  <div v-if="githubUsername" class="container">
    {{githubUsername}}
    <label style="text-align: center; width: 100%">
      <textarea ref="textarea" :style="{'height': height}" v-model="inputForm" placeholder="输入评论..."/>
    </label>
    <div class="bottom">
      <button class="button" @click="handleComment">评论</button>
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
import { mapGetters } from 'vuex'
import { getToken } from '@/utils/auth'

export default {
  name: 'InputItem',
  data() {
    return {
      inputForm: null,
      height: 30
    }
  },
  computed: {
    ...mapGetters([
      'githubUsername',
      'githubUserAvatar'
    ])
  },
  mounted() {
    if (this.$route.query.code) {
      const requestToken = this.$route.query.code
      const accessData = {
        client_id: clientID,
        client_secret: clientSecret,
        code: requestToken
      }
      console.log(!getToken())
      if (!getToken()) {
        console.log('login')
        store.dispatch('githubUser/login', accessData).then(token => {
          store.dispatch('githubUser/getInfo', token)
        })
      } else {
        console.log('hasToken')
        const token = getToken()
        store.dispatch('githubUser/getInfo', token)
      }
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
    handleLogin() {
      const id = this.$route.query.id
      window.location.href = 'https://github.com/login/oauth/authorize?' +
          `client_id=${clientID}&` +
          `redirect_uri=http://localhost:8080/content?id=${id}`
    },
    handleComment() {
      console.log('handleComment')
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
    //max-width: 90%;
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
