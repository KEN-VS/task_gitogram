<template>
  <button
  :class="['c-button', `theme-green`,{'hovered-text':withHoverText}]"
  :data-hover-text="hoverText"
  >
    <span class="btn-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>

export default {
  name: 'xButton',
  props: {
    hoverText: {
      type: String
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }

}
</script>

<style src="./xButton.scss" lang="scss" scoped></style>
