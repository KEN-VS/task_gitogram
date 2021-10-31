<template>
<ul class="headline__list">
  <li class="headline__item">
    <a href="#" class="headline__link">
      <icon name="home"/>
    </a>
  </li>
  <li class="headline__item headline__photo">
    <a href="#" class="headline__link">
      <icon name="photo"/>
    </a>
  </li>
  <li class="headline__item">
    <a href="#" class="headline__link">
      <icon name="arrow"/>
    </a>
  </li>
</ul>
</template>

<script>
import { icon } from '../../icons'
export default {
  name: 'navigation',
  components: {
    icon
  }
}
</script>

<style src='./navigation.scss'    lang='scss' scoped>

</style>
