<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="headline__logo">
        <logo></logo>
        </div>
        <nav class="headline__menu">
        <navigation></navigation>
        </nav>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
          <user-item
          :avatar="story.avatar"
          :username="story.username"
        />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="main-content">
    <ul class="content-list">
      <li class="content-item">
        <feed>
              <template #card>
                <h2 class="feeds__title">Vue.js</h2>
                <div class="feeds__content">
                  <p>
                  <b>JavaScript </b> framework for building interactive web applications ⚡
                  </p></div>
                <features></features>
              </template>
        </feed>
      </li>
      <li class="content-item">
        <feed>
          <template #card>
            <h2 class="feeds__title">React.js</h2>
            <div class="feeds__content">
              <p>
              <b>Open source</b> JavaScript library used for designing user interfaces</p></div>
            <features></features>
          </template>
        </feed>
        </li>
    </ul>

  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { logo } from '../../components/logo'
import { navigation } from '../../components/navigation'
import { userItem } from '../../components/useritem'
import stories from './data.json'
import { feed } from '../../components/feed'
import { features } from '../../components/features'

export default {
  name: 'feeds',
  components: {
    topline,
    logo,
    navigation,
    userItem,
    feed,
    features
  },
  data () {
    return {
      stories
    }
  }

}
</script>

<style src="./feeds.scss" lang="scss" scoped></style>
