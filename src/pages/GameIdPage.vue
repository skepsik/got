<template lang="pug">
div
  ResultsList( :id="id" )
</template>

<script lang="ts">
import Vue from 'vue'

import ResultsList from '@/components/ResultsList.vue'

export default Vue.extend({
  name: 'GameIdPage',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    ResultsList
  }
})
</script>
