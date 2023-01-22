<template lang="pug">
v-form( v-model="valid" ref="form" lazy-validation)
  v-row
    v-col
      HouseSelect( v-model="house" :rules="rules" label="Дом" )
    v-col
      v-text-field( v-model="score" :rules="rules" label="Очки" )
    v-col
      v-text-field( v-model="landings" :rules="rules"  label="Территории" )
    v-col
      v-text-field( v-model="supply" :rules="rules" label="Снабжение" )
    v-col
      v-text-field( v-model="throne" :rules="rules" label="Трон" )
  v-row
    v-col
      v-btn( :disabled="!valid" color="primary" @click="add" ) Добавить
</template>

<script lang="ts">
import Vue from 'vue'

import { required } from '@/helpers/rules'

import HouseSelect from './HouseSelect.vue'

export default Vue.extend({
  name: 'ResultForm',
  components: {
    HouseSelect
  },
  data () {
    return {
      score: null,
      landings: null,
      supply: null,
      throne: null,
      house: null,
      rules: [
        required
      ],
      valid: true
    }
  },
  methods: {
    validate (): boolean {
      return (this.$refs?.form as HTMLFormElement).validate()
    },
    reset () {
      (this.$refs?.form as HTMLFormElement).reset()
    },
    resetValidation () {
      (this.$refs?.form as HTMLFormElement).resetValidation()
    },
    add () {
      if (this.validate()) {
        const Result = this.$store.$db().model('results')
        const { score, landings, supply, throne, house } = this
        Result.insert({
          data: { score, landings, supply, throne, house }
        })
        this.reset()
      }
    }
  }
})
</script>
