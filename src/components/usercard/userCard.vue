<template>
<div class="usercard">
<img class="usercard__img" :src="useravatar" alt="user foto">
<h3 class="usercard__title">{{username}}</h3>
</div>
</template>

<script>

export default {
  name: 'userCard',
  props: {
    useravatar: {
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

<style src='./user-card.scss'    lang='scss' scoped>

</style>
