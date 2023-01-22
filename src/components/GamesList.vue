<template lang="pug">
v-list.grow
  v-list-item(v-for="item in games" :key="item.id" link :to="{ name: 'GameId', params: { id: item.id } }")
    v-list-item-title
      date-view( :value="item.date" )
</template>

<script lang="ts">
import Vue from 'vue'

import { Game } from '@/models/Game'

import DateView from './DateView.vue'

export default Vue.extend({
  name: 'GamesList',
  components: {
    DateView
  },
  data: () => ({
    items: [
      { title: 'Партии', icon: 'mdi-view-dashboard', route: { name: 'Games' } },
      { title: 'Игроки', icon: 'mdi-account-circle-outline', route: { name: 'Players' } },
      { title: 'Дома', icon: 'mdi-castle', route: { name: 'Houses' } }
    ]
  }),
  computed: {
    games () {
      return Game.all()
    }
  }
})
</script>
