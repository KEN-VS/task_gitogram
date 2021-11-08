<template>
<div class="x-container">
  <div class="c-container">
    <div class="feed__title">
      <user-card
      :useravatar="useravatar"
      :username="username" />
    </div>
    <div class="feed__cover">
      <slot name="card"/>
    </div>
    <toggler @onToggle="toggle"/>
    <div class="comments" v-if="shown">
      <ul class="comments__list" >
        <li class="comments__item" v-for="statement in statements" :key="statement.id">
          <comment :text="statement.text" :username="statement.username"/>
        </li>
    </ul>
    </div>
    <time class="feedtime" datetime='{{datetime}}'>{{date}}</time>
  </div>
</div>
</template>

<script>
import { userCard } from '../../components/userCard'
import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'
import statements from './data.json'

export default {
  name: 'feed',
  components: {
    userCard,
    toggler,
    comment
  },
  data () {
    return {
      statements,
      shown: false
    }
  },
  props: {
    date: {
      type: String,
      required: true
    },
    datetime: {
      type: String,
      required: true
    }

  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style src='./feed.scss'    lang='scss' scoped>

</style>
