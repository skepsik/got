<template lang="pug">
img( :src="path" )
</template>

<script lang="ts">
import Vue from 'vue'

import { getEmblemFromId } from '@/helpers/emblems'

export default Vue.extend({
  name: 'HouseEmblem',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    path (): string {
      return getEmblemFromId(this.value)
    }
  }
})
</script>
