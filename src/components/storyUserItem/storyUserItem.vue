<template>
<button class="c-user-btn">
  <div class="avatar">
  <img :src='avatar ' alt="avatar" class="avatar__img">
  </div>
  <div class="username">{{username}}</div>
</button>
</template>

<script>
export default {
  name: 'storyUserItem',
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./storyUserItem.scss" lang="scss" scoped></style>
