<template lang="pug">
v-dialog(
  v-model="dialog"
  fullscreen
  hide-overlay
  transition="dialog-bottom-transition"
  )
  template( #activator="{ on, attrs }" )
    v-btn(
      class="ma-2"
      color="primary"
      v-bind="attrs"
      v-on="on"
      ) Добавить игру
  v-card( v-if="dialog" )
    v-toolbar(
      dark
      color="primary"
      )
      v-btn(
        icon
        dark
        @click="dialog = false"
        )
          v-icon mdi-close
      v-toolbar-title Новая игра
      v-spacer
      v-toolbar-items
        v-btn(
          dark
          text
          @click="onSave"
        ) Сохранить
    v-card-text
      v-form( v-model="valid" ref="form" lazy-validation)
        v-row
          v-col( cols="auto" )
            v-menu(
              ref="menu"
              v-model="datePicker"
              :close-on-content-click="false"
              :return-value.sync="game.dateISO"
              transition="scale-transition"
              offset-y
              min-width="auto"
            )
              template( #activator="{ on, attrs }" )
                v-text-field(
                  :value="game.date()"
                  label="Дата игры"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                )
              v-date-picker(
                v-model="game.dateISO"
                first-day-of-week="1"
                no-title
                scrollable
                )
          v-spacer
          v-col( cols="6" )
            //- div {{ game.type }}
            v-radio-group( v-model="game.type_id" )
              v-row
                v-col(
                  v-for="type in gameTypes"
                  :key="type.id"
                  cols="auto"
                  )
                  v-radio(
                    :value="type.id"
                    :label="type.label"
                    )
        v-list
          v-list-item( v-for="item in results" :key="item.id")
            v-row( align="center" )
              v-col( cols="auto" )
                v-avatar
                  img( :src="house(item.house_id).path()" )
              v-col
                v-select(
                  v-model="item.user_id"
                  :items="users"
                  :rules="[rules.required(false)]"
                  itemValue="id"
                  itemText="label"
                  label="Игрок"
                  clearable
                  )
              v-col
                v-text-field( v-model="item.score" :disabled="item.isVassal()" :rules="[rules.required(item.isVassal()), rules.score(item.isVassal())]" label="Очки" )
              v-col
                v-text-field( v-model="item.landings" :disabled="item.isVassal()" :rules="[rules.required(item.isVassal()), rules.landings(item.isVassal())]"  label="Территории" )
              v-col
                v-text-field( v-model="item.supply" :disabled="item.isVassal()" :rules="[rules.required(item.isVassal()), rules.supply(item.isVassal())]" label="Снабжение" )
              v-col
                v-text-field( v-model="item.throne" :disabled="item.isVassal()" :rules="[rules.required(item.isVassal()), rules.throne(item.isVassal())]" label="Трон" )
</template>

<script lang="ts">
import Vue from 'vue'

import { Rules, RulesSet } from '@/helpers/rules'

import { Game } from '@/models/Game'
import { GameType } from '@/models/GameType'
import { House } from '@/models/House'
import { Result } from '@/models/Result'
import { User } from '@/models/User'

import HouseSelect from './HouseSelect.vue'

interface LocalState {
  game: Game,
  results: Result[],
  rules: RulesSet,
  valid: boolean,
  dialog: boolean,
  datePicker: boolean,
}

export default Vue.extend({
  name: 'NewGameDialog',
  components: {
    HouseSelect
  },
  data (): LocalState {
    return {
      results: [],
      game: new Game(),
      valid: true,
      rules: Rules,
      dialog: false,
      datePicker: false
    }
  },
  computed: {
    gameTypes (): GameType[] {
      return GameType.all()
    },
    gameType (): GameType | null {
      return GameType.query().with('houses').whereId(this.game.type_id).first()
    },
    houses (): House[] {
      return House.all()
    },
    users (): Pick<User, 'id' | 'label'>[] {
      const users = []
      if (this.gameType?.vassals) {
        users.push({ id: User.VASSAL, label: 'Вассал' })
      }
      return [...users, ...User.all()]
    }
  },
  methods: {
    house (id: string): House | null{
      return House.find(id)
    },
    validate (): boolean {
      return (this.$refs?.form as HTMLFormElement).validate()
    },
    resetHouses () {
      const houses = this.gameType?.houses
      if (houses) {
        this.results = houses.map(({ id }) => new Result({ house_id: id, game_id: this.game.id }))
      }
    },
    async saveRecords () {
      await Game.insertOrUpdate({
        data: {
          ...this.game,
          results: this.results
        }
      })
    },
    async onSave () {
      // if (this.validate()) {
      await this.saveRecords()
      this.game = new Game()
      this.resetHouses()
      this.dialog = false
      // }
    }
  },
  watch: {
    'game.type': {
      immediate: true,
      handler () {
        this.resetHouses()
      }
    }
  }
})
</script>
