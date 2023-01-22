<template lang="pug">
v-app
  v-navigation-drawer(
    width="300"
    app
    )
    v-row.fill-height(no-gutters)
      v-navigation-drawer(
        mini-variant-width="56"
        dark
        mini-variant
        permanent
        )
        v-list-item.px-2
          v-list-item-avatar
            v-img(src="https://randomuser.me/api/portraits/women/75.jpg")
        v-divider
        v-list(dense nav)
          v-list-item(
            v-for="item in items"
            :key="item.title"
            :to="item.route"
          )
            v-list-item-action
              v-icon {{ item.icon }}
            v-list-item-content
              v-list-item-title {{ item.title }}
      component( :is="ListingComponent" )
  v-app-bar(app)
    v-toolbar-title GoT
  v-main
    v-container(fluid)
      router-view
  v-footer(app)
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'

import { houses } from '@/data/houses'
import { games } from '@/data/games'

import { House } from '@/models/House'
import { Game } from '@/models/Game'

import GamesList from './components/GamesList.vue'
import HousesList from './components/HousesList.vue'

export default Vue.extend({
  name: 'App',

  data: () => ({
    items: [
      { title: 'Партии', icon: 'mdi-view-dashboard', route: { name: 'Games' } },
      { title: 'Игроки', icon: 'mdi-account-circle-outline', route: { name: 'Players' } },
      { title: 'Дома', icon: 'mdi-castle', route: { name: 'Houses' } }
    ]
  }),

  computed: {
    ListingComponent (): VueConstructor | null {
      if (!this.$route.matched.length) {
        return null
      }
      const { name } = this.$route.matched[0]
      if (name === 'Games') {
        return GamesList
      }
      if (name === 'Houses') {
        return HousesList
      }
      return null
    }
  },

  created () {
    House.insert({ data: houses })
    Game.insert({ data: games })
  }
})
</script>
