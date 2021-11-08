<template>
<div class="features__list">
  <div class="feature__star"><icon name="star"/> <span>Star</span></div>
  <div class="feature__count-star">{{stars}}</div>
  <div class="feature__fork"><icon name="fork"/> <span>Fork</span></div>
  <div class="feature__count-fork">{{fork}}</div>
</div>
</template>

<script>
import { icon } from '../../icons'
export default {
  name: 'features',
  components: {
    icon
  },
  props: {
    stars: {
      type: Number,
      required: true
    },
    fork: {
      type: Number,
      required: true
    }
  }
}
</script>

<style src='./features.scss'    lang='scss' scoped>

</style>
