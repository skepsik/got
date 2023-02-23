<template lang="pug">
v-data-table(
  :items="items"
  :headers="headers"
  disable-sort
  disable-pagination
  hide-default-footer
  )
  template( #item.house="{ item }")
    v-avatar
      img( :src="item.house.path()" )
  template( #item.user_id="{ item }" )
   div( :class="$style.user" v-if="item.user" ) {{ item.user.label }}
  template( #item.score="{ item }" )
    div( :class="$style.scores" ) {{ item.score }}
  template( #item.landings="{ item }" )
    div( :class="$style.scores" ) {{ item.landings }}
  template( #item.supply="{ item }" )
    div( :class="$style.scores" ) {{ item.supply }}
  template( #item.throne="{ item }" )
    div( :class="$style.scores" ) {{ item.throne }}

</template>

<script lang="ts">
import Vue from 'vue'

import { Result } from '@/models/Result'
import { User } from '@/models/User'

export default Vue.extend({
  name: 'ResultsList',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      headers: [{
        value: 'house',
        text: 'Дом',
        width: '12%',
        align: 'center'
      }, {
        value: 'user_id',
        width: 220
      }, {
        value: 'score',
        text: 'Очки',
        width: '22%',
        align: 'center'
      }, {
        value: 'landings',
        text: 'Территории',
        width: '22%',
        align: 'center'
      }, {
        value: 'supply',
        text: 'Снабжение',
        width: '22%',
        align: 'center'
      }, {
        value: 'throne',
        text: 'Трон',
        width: '22%',
        align: 'center'
      }]
    }
  },
  computed: {
    items () {
      return Result.query()
        .where('game_id', this.id)
        .where('user_id', (value: string) => value !== User.VASSAL)
        .with('house')
        .with('user')
        .orderBy('score', 'desc')
        .orderBy('landings', 'desc')
        .orderBy('supply', 'desc')
        .orderBy('throne')
        .get()
    }
  }
})
</script>

<style lang="stylus" module>
.scores {
  font-size 28px
  font-weight 500
}
.user {
  font-weight bold
  font-size 1.25rem
}
</style>
