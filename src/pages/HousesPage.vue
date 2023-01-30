<template lang="pug">
AppLayout
  template( #sidebar )
    HousesList
  template( #toolbar ) GoT
  template
    router-view
</template>

<script lang="ts">
import Vue from 'vue'

import AppLayout from '@/components/AppLayout.vue'
import HousesList from '@/components/HousesList.vue'

export default Vue.extend({
  name: 'HousesPage',

  components: {
    AppLayout,
    HousesList
  }
})
</script>
