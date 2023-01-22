<template lang="pug">
v-list.grow
  v-list-item(v-for="item in items" :key="item.id" link :to="{ name: 'HouseId', params: { id: item.id } }")
    v-list-item-icon
      v-avatar
        img( :src="item.path()" )
    v-list-item-title {{  item.name }}
</template>

<script lang="ts">
import Vue from 'vue'

import { House } from '@/models/House'

export default Vue.extend({
  name: 'HousesList',
  data: () => ({

  }),
  computed: {
    items () {
      return House.query().orderBy('order').get()
    }
  }
})
</script>
