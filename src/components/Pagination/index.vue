<template>
  <div class="container">
    <button @click="handlePreview" :class="{button: !previewIsVoid, void: previewIsVoid}">PREVIEW</button>
    <button @click="handleNext" :class="{button: !nextIsVoid, void: nextIsVoid}">NEXT</button>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    inject: ['reload'],
    props: ['page', 'pageSize', 'total'],
    data() {
      return {
        listQuery: {
          page: this.page,
          pageSize: this.pageSize
        },
        previewIsVoid: false,
        nextIsVoid: false
      }
    },
    mounted() {
      if (this.page === 1) {
        this.previewIsVoid = true
      }
      if (this.page * this.pageSize >= this.total) {
        this.nextIsVoid = true
      }
    },
    methods: {
      handleNext() {
        if (!this.nextIsVoid) {
          this.listQuery.page = this.page + 1
          const listQuery = Object.assign(this.$route.query, this.listQuery)
          this.$router.push({
            path: '/article',
            query: listQuery
          }).catch(() => {})
          this.reload()
        }
      },
      handlePreview() {
        if (this.page === 1) {
          this.listQuery.page = 1
        } else {
          this.listQuery.page = this.page - 1
          const listQuery = Object.assign(this.$route.query, this.listQuery)
          this.$router.push({
            path: '/article',
            query: listQuery
          }).catch(() => {})
          this.reload()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: space-between;

    .button {
      border: 1px solid #ffffff;
      border-radius: 5px;
      padding: 10px;

      &:hover {
        cursor: pointer;
        background-color: #8c939d;
        color: #ffffff;
        transition: all 0.5s cubic-bezier(.25,.8,.25,1);
      }
    }

    .void {
      border: 1px solid #ffffff;
      border-radius: 5px;
      padding: 10px;

      &:hover {
        cursor: not-allowed;
      }
    }
  }
</style>
