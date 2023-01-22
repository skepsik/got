<template lang="pug">
div
  ResultsList( :id="id" )
  ResultForm
</template>

<script lang="ts">
import Vue from 'vue'

import ResultsList from '@/components/ResultsList.vue'
import ResultForm from '@/components/ResultForm.vue'

export default Vue.extend({
  name: 'GameIdPage',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    ResultsList,
    ResultForm
  }
})
</script>
