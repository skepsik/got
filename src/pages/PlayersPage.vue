<template lang="pug">
AppLayout
  template( #sidebar )
    UsersList
  template( #toolbar ) GoT
  template
    router-view
</template>

<script lang="ts">
import Vue from 'vue'

import AppLayout from '@/components/AppLayout.vue'
import UsersList from '@/components/UsersList.vue'

export default Vue.extend({
  name: 'HousesPage',

  components: {
    AppLayout,
    UsersList
  }
})
</script>
