<template>
  <div class="container">
    <label style="text-align: center; width: 100%">
      <textarea ref="textarea" :style="{'height': height}" v-model="inputForm" placeholder="输入评论..."/>
    </label>
    <div class="bottom">
      <button class="button" @click="handleComment">评论</button>
    </div>
  </div>
</template>

<script>
import calcTextareaHeight from '@/utils/calcTextareaHeight'

export default {
  name: 'InputItem',
  data() {
    return {
      inputForm: null,
      height: 30
    }
  },
  watch: {
    inputForm() {
      const el = this.$refs.textarea
      this.height = calcTextareaHeight(el).height
    }
  },
  methods: {
    handleComment() {
      console.log(this.inputForm)
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    background-color: #fafbfc;
    display: flex;
    justify-content: center;
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
