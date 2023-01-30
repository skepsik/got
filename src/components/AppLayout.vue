<template lang="pug">
.d-flex.fill-height
  .d-flex( :class="[$style.z, $style.sidebar]" )
    slot( name="sidebar" )
  v-divider( :class="$style.z" vertical )
  slot
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppLayout'
})
</script>

<style lang="stylus" module>
.z
  z-index 1

.sidebar
  width 300px
</style>
