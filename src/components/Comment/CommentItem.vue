<template>
  <div :class="{isParentComment: !!commentInfo.children, isChildrenComment: !commentInfo.children}" class="comment-item-wrapper">
    <div class="top">
      {{commentInfo.from_id}}
    </div>
    <div class="mid">
      {{commentInfo.content}}
    </div>
    <div class="bottom">
      <div class="time">
        {{commentInfo.create_time}}
      </div>
      <div class="bottom-right">
        <svg-icon icon-class="good" class="icon-good"></svg-icon>
        <div class="icon-response" @click="handleActive">
          <svg-icon icon-class="response" ref="responseButton"></svg-icon>
          回复
        </div>
      </div>
    </div>
    <input-item v-if="responseActive" @textContent="textContent"/>
    <div class="children-item">
      <comment-item v-for="item in commentInfo.children" :key="item.id" :commentInfo="item"/>
    </div>
  </div>
</template>

<script>
import InputItem from '@/components/Comment/InputItem'

export default {
  name: 'CommentItem',
  components: {
    InputItem
  },
  props: ['commentInfo'],
  data() {
    return {
      responseActive: false,
      inputContent: false
    }
  },
  mounted() {
    document.addEventListener('click', this.click, true)
  },
  methods: {
    handleActive() {
      this.responseActive = !this.responseActive
    },
    textContent(value) {
      this.inputContent = !!value
    },
    click(e) {
      if (e.target.nodeName === 'TEXTAREA') {
        return
      }
      if (!this.inputContent) {
        this.responseActive = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .icon-response {
    &:hover {
      cursor: pointer;
    }
  }

  .icon-good {
    &:hover {
      cursor: pointer;
    }
  }

  .isParentComment {
    margin: 10px 0 0 0;
    border-bottom: 1px solid #e5e9ef;
  }

  .isChildrenComment {
    background-color: #fafbfc;
  }

  .children-item {
    background-color: #fafbfc;
    margin: 0 0 10px 5%;
  }

  .comment-item-wrapper {
    padding: 5px 0 0 0;
    margin: 0 0 10px 5%;

    .top {
      margin: 0 0 5px;
    }

    .mid {
      margin: 0 0 5px;
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 0 0 10px 0;

      .bottom-right {
        width: 90px;
        display: flex;
        justify-content: space-between;
        margin: 0 10px 0 0;
      }
    }
  }
</style>
