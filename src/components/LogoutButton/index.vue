<template>
  <div v-if="avatar" class="container">
    <img :src="avatar" class="img" alt="img" @click="handleLogout"/>
  </div>
</template>

<script>
  import { githubLogout } from '@/api/githubLogin'
  export default {
    name: 'LogoutButton',
    computed: {
      avatar() {
        return localStorage.getItem('avatar_url')
      }
    },
    methods: {
      handleLogout() {
        if (window.confirm('Do you really want to logout?')) {
          githubLogout().then(() => {
            console.log('logout success')
            this.$router.go(0)
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    position: fixed;
    right: 2%;
    bottom: 5%;
    display: flex;
    justify-content: center;
    align-items: center;

    .img {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
