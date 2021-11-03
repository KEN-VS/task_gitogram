<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="headline__logo">
        <logo />
        </div>
        <nav class="headline__menu">
        <navigation />
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
                <div class="feeds__content">
                   <card-title
                :title='card1.title'
                :mainItem='card1.mainItem'
                :content='card1.content'
                />
                </div>
                <features></features>
              </template>
        </feed>
      </li>
      <li class="content-item">
        <feed>
          <template #card>
            <div class="feeds__content">
                   <card-title
                :title='card2.title'
                :mainItem='card2.mainItem'
                :content='card2.content'
                />
                </div>
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
import { cardTitle } from '../../components/cardtitle'

export default {
  name: 'feeds',
  components: {
    topline,
    logo,
    navigation,
    userItem,
    feed,
    features,
    cardTitle
  },
  data () {
    return {
      stories,
      card1: {
        title: 'Vue.js',
        mainItem: 'JavaScript ',
        content: 'framework for building interactive web applications ⚡'
      },
      card2: {
        title: 'React.js',
        mainItem: 'Open source',
        content: ' JavaScript library used for designing user interfaces'
      }
    }
  }
}
</script>

<style src="./feeds.scss" lang="scss" scoped></style>
