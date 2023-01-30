<template lang="pug">
AppLayout
  template( #sidebar )
    GamesList
  template( #toolbar ) GoT
  template
    router-view
</template>

<script lang="ts">
import Vue from 'vue'

import AppLayout from '@/components/AppLayout.vue'
import GamesList from '@/components/GamesList.vue'

export default Vue.extend({
  name: 'GamesPage',

  components: {
    AppLayout,
    GamesList
  }
})
</script>
