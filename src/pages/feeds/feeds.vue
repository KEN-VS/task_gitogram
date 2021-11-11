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
          <li class="stories-item" v-for="item in items" :key="item.id">
          <story-user-item
          :avatar="item.owner.avatar_url"
          :username="item.owner.login"
        />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="main-content">
    <ul class="content-list">
      <li class="content-item" v-for="item in topItems" :key="item.id">
        <feed
        :datetime='item.updated_at'
        :date='item.updated_at.substring(0,10)'
        :useravatar='item.owner.avatar_url'
        :username='item.owner.login'
        >
              <template #card>
                <div class="feeds__content">
                   <card-title
                :title='item.name'
                :content='item.description'
                />
                </div>
                <features
                :stars="item.stargazers_count"
                :fork="item.forks"
                ></features>
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
import { storyUserItem } from '../../components/storyUserItem'
import { feed } from '../../components/feed'
import { features } from '../../components/features'
import { cardTitle } from '../../components/cardtitle'
import * as api from '../../api'

export default {
  name: 'feeds',
  components: {
    topline,
    logo,
    navigation,
    storyUserItem,
    feed,
    features,
    cardTitle
  },
  data () {
    return {
      items: []
    }
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrandings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  },
  computed: {
    topItems () {
      return this.items.slice([0], [2])
    }
  }
}
</script>

<style src="./feeds.scss" lang="scss" scoped></style>
