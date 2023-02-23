<template lang="pug">
v-app
  v-navigation-drawer(
    width="300"
    app
    mini-variant-width="56"
    dark
    mini-variant
    permanent
    )
    v-list-item.px-2
      v-list-item-avatar
        v-img( :src="avatar" )
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

  v-main
    router-view
  //- v-footer(app)
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'

import { houses } from '@/data/houses'
import { games } from '@/data/games'
import { gameTypes } from '@/data/gameTypes'

import { House } from '@/models/House'
import { Game } from '@/models/Game'
import { GameType } from '@/models/GameType'

import HousesList from './components/HousesList.vue'
import UsersList from './components/UsersList.vue'
import { User } from './models/User'
import { users } from './data/users'

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
    avatar (): string {
      return `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100) + 1}.jpg`
    },
    ListingComponent (): VueConstructor | null {
      if (!this.$route.matched.length) {
        return null
      }
      const { name } = this.$route.matched[0]
      if (name === 'Houses') {
        return HousesList
      }
      if (name === 'Players') {
        return UsersList
      }
      return null
    }
  },

  created () {
    House.insert({ data: houses })
    User.insert({ data: users })
    GameType.insert({ data: gameTypes })
    Game.insert({ data: games })
  }
})
</script>
