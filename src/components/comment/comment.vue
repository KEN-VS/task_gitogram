<template>
<div class="c-comment">
  <p>
    <span class="username">{{username}}</span>
    {{text}}
  </p>
</div>
</template>

<script>

export default {
  name: 'comment',
  props: {
    text: {
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

<style src='./comment.scss'    lang='scss' scoped>

</style>
