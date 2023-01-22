<template lang="pug">
span {{  text  }}
</template>

<script lang="ts">
import Vue from 'vue'

import moment from 'moment'

export default Vue.extend({
  name: 'DateView',
  props: {
    value: {
      type: String,
      default: ''
    },
    format: {
      type: String,
      default: 'll'
    }
  },
  computed: {
    text (): string {
      return moment(this.value).format(this.format)
    }
  }
})
</script>
