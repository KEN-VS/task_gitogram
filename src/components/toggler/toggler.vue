<template>
  <button :class="['btn',{'active':isOpened}]" @click="toggle">
    <span class="btn__text">{{isOpened ? "Hide" : "View"}} issues</span>
    <span class="icon">
      <icon name="triangle"/>
    </span>
  </button>
</template>

<script>
import { icon } from '../../icons'
export default {
  name: 'toggler',
  components: {
    icon
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style src='./toggler.scss'    lang='scss' scoped>

</style>
