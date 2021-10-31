<template>
<ul class="features__list">
  <li class="features__item">
    <div class="feature-star"><icon name="star"/></div>
    <div class="feature__name">Star</div>
  </li>
  <li class="features__item feature__value">
    <div class="feature__count">156k</div>
  </li>
  <li class="features__item">
    <div class="feature-fork"><icon name="fork"/></div>
    <div class="feature__name">Fork</div>
  </li>
  <li class="features__item feature__value">
    <div class="feature__count">4</div>
  </li>
</ul>
</template>

<script>
import { icon } from '../../icons'
export default {
  name: 'features',
  components: {
    icon
  }
}
</script>

<style src='./features.scss'    lang='scss' scoped>

</style>
