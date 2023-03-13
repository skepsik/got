<template lang="pug">
  v-list.grow
    v-list-item(v-for="item in users" :key="item.id" link :to="{ name: 'PlayerId', params: { id: item.id } }")
      v-list-item-avatar {{ item.rating }}
      v-list-item-content
        v-list-item-title {{ item.label }}
        v-list-item-subtitle игр: {{ item.totalGames }} очков: {{ item.totalScores }}
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
      return User.query()
        // .whereIdIn([
        //   'tiuskiy',
        //   'skepsik',
        //   'savvin',
        //   '.',
        //   'ilya_mitt',
        //   'elgraden',
        //   'le_roi_des_aigles'
        // ])
        .orderBy('rating', 'desc')
        .orderBy('totalGames', 'desc')
        .get()
    }
  },
  methods: {
    onSave () {
      //
    }
  }
})
</script>
