<template lang="pug">
v-select( v-bind="$attrs" :items="items" itemText="name" itemValue="id" @input="$emit('input', $event)")
  template( #selection="{ item }" )
    v-avatar( :size="32" left )
      img( :src="item.path()" )
    div.ml-1 {{ item.name }}
  template( #item="{ item }" )
    v-list-item-avatar( :size="48" )
      img( :src="item.path()" )
    v-list-item-content
      v-list-item-title( v-html="item.name" )
</template>

<script lang="ts">
import Vue from 'vue'

import { House } from '@/models/House'

export default Vue.extend({
  name: 'HouseSelect',
  computed: {
    items () {
      return House.all()
    }
  }
})
</script>
