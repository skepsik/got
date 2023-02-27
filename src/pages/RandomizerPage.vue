<template lang="pug">
.flex-grow-1
  v-app-bar( )
    v-toolbar-title Рандомайзер
  v-container(fluid)
    v-row.align-center
      v-col( cols="auto" ) Тип
      v-col( cols="2" )
        v-select( v-model="type" :items="types" itemText="label" itemValue="id")
    v-row.align-center
      v-col( cols="auto" ) Игроки
      v-col( cols="10" )
        v-select( v-model="players" :items="users" itemText="label" itemValue="id" multiple )
    v-btn( color="primary" @click="start" ) Старт!
    v-row
      v-list(
        v-if="usersShuffled.length"
        lines="two"
      )
        v-list-item( v-for="(house, index) in houses" :key="house.id" )
          v-list-item-avatar
            img( :src="house.path()" )
          v-list-item-content
            v-list-item-title {{ house.name }}
            v-list-item-subtitle {{ usersShuffled[index].label }}
</template>

<script lang="ts">
import Vue from 'vue'
import { shuffle } from 'lodash-es'
import { GameType } from '@/models/GameType'
import { House } from '@/models/House'
import { User } from '@/models/User'

export default Vue.extend({
  name: 'RandomizerPage',

  components: {
    //
  },
  data () {
    return {
      count: 3,
      players: [],
      type: 'classic',
      result: []
    }
  },
  computed: {
    data (): number[] {
      return shuffle(this.houses.map((_, index) => index))
    },
    houses (): House[] {
      return House.query().whereIdIn(this.game?.houses_ids || []).get()
    },
    types (): GameType[] {
      return GameType.all()
    },
    game (): GameType | null {
      return GameType.find(this.type)
    },
    users (): User[] {
      return User.all()
    },
    usersShuffled (): User[] {
      return User.query().whereIdIn(this.result).get()
    }
  },
  methods: {
    start () {
      this.result = shuffle(this.players)
    }
  }
})
</script>
