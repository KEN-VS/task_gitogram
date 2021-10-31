<template>
<div class="x-container">
  <div class="c-container">
    <div class="feed__title">
      <user-card
      :useravatar="userData1.useravatar"
      :username="userData1.username" />
    </div>
    <div class="feed__cover">
      <slot name="card"/>
    </div>
    <toggler @onToggle="toggle"/>
    <div class="comments" v-if="shown">
      <ul class="comments__list" >
        <li class="comments__item" v-for="item in items" :key="item.id">
          <comment :text="item.text" :username="item.username"/>
        </li>
    </ul>
    </div>
    <time class="feedtime" datatime="#"> 15  may</time>
  </div>
</div>
</template>

<script>
import { userCard } from '../../components/usercard'
import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'
import items from './data.json'

export default {
  name: 'feed',
  components: {
    userCard,
    toggler,
    comment
  },
  data () {
    return {
      items,
      shown: false,
      userData1: {
        useravatar: 'https://cdn.pixabay.com/photo/2020/10/26/15/46/autumn-5687698_960_720.jpg',
        username: 'joshua_l'
      },
      userData2: {
        useravatar: 'https://cdn.pixabay.com/photo/2020/10/26/15/46/autumn-5687698_960_720.jpg',
        username: 'Camille'
      }

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
