<template>
  <div class="top-bar-container">
    <div class="icon-container">
      Icon
    </div>
    <div class="nav-bar-container">
      <router-link to="/home" class="nav-bar-item">
        Home
      </router-link>
      <router-link to="/article" class="nav-bar-item">
        Articles
      </router-link>
      <router-link to="/link" class="nav-bar-item">
        Links
      </router-link>
      <router-link to="/about" class="nav-bar-item">
        about
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopBar'
  }
</script>

<style lang="scss" scoped>
  .top-bar-container {
    height: 30px;
    margin: 0 0 2rem;
    padding: 10px 15%;
    background-color: #FFFFFF;
    border-radius: 2px;
    border-bottom: 1px solid rgba(30,35,42,.06);
    box-shadow: 0 4px 10px 1px rgba(0,0,0,.05);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-bar-container {
    display: flex;
    justify-content: space-around;
    font-weight: 900;

    .nav-bar-item {
      margin: 0 20px;
      font-family: 'Open Sans', sans-serif;

      &:hover {
        color: #0a76a4;
      }
    }
  }

</style>
