<template lang="pug">
.flex-grow-1
  v-app-bar( )
    slot( name="toolbar" )
  v-container(fluid)
    slot
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PageIdLayout'
})
</script>
