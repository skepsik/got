<template lang="pug">
PageIdLayout
  template( #toolbar )
    v-toolbar-title GoT - {{ title }}
    v-spacer
    span {{ date }}
  ResultsList( :id="id" )
</template>

<script lang="ts">
import Vue from 'vue'

import PageIdLayout from '@/components/PageIdLayout.vue'
import ResultsList from '@/components/ResultsList.vue'
import { Game } from '@/models/Game'

export default Vue.extend({
  name: 'GameIdPage',
  components: {
    PageIdLayout,
    ResultsList
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    game (): Game | null {
      return Game.query().whereId(this.id).withAll().first()
    },
    date (): string {
      return this.game ? this.game.date() : ''
    },
    title (): string {
      if (!this.game) {
        return ''
      }
      return this.game.type.label
    }
  }
})
</script>
