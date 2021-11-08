<template>
  <h2 class="card__title">{{title}}</h2>
  <div class="card__content">
    <p>
    {{content}}</p>
  </div>
</template>

<script>

export default {
  name: 'cardTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./cardTitle.scss" lang="scss" scoped></style>
