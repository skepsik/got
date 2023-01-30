<template lang="pug">
  v-list.grow
    v-list-item(v-for="item in users" :key="item.id" link :to="{ name: 'PlayerId', params: { id: item.id } }")
      v-list-item-content
        v-list-item-title {{ item.label }}
        v-list-item-subtitle Всего игр: {{ item.totalGames }}
</template>

<script lang="ts">
import Vue from 'vue'

import { User } from '@/models/User'

export default Vue.extend({
  name: 'UsersList',
  components: {
  },
  data: () => ({

  }),
  computed: {
    users () {
      return User.query().orderBy('totalGames', 'desc').all()
    }
  },
  methods: {
    onSave () {
      //
    }
  }
})
</script>
