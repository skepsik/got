<template lang="pug">
.d-flex.flex-column.flex-grow-1( :class="$style.list" )
  v-list.grow
    v-list-item(v-for="item in games" :key="item.id" link :to="{ name: 'GameId', params: { id: item.id } }")
      v-list-item-title {{ item.date() }}
  v-divider
  new-game-dialog
</template>

<script lang="ts">
import Vue from 'vue'

import { Game } from '@/models/Game'

import NewGameDialog from './NewGameDialog.vue'

export default Vue.extend({
  name: 'GamesList',
  components: {
    NewGameDialog
  },
  data: () => ({

  }),
  computed: {
    games () {
      return Game.query().orderBy('date').get()
    }
  },
  methods: {
    onSave () {
      //
    }
  }
})
</script>

<style lang="stylus" module>
.list
  max-width 300px
  flex: 0 0 300px
</style>
