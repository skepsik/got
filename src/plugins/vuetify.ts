import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

import { vuetifyPreset } from './vuetifyPreset'

Vue.use(Vuetify)

export default new Vuetify({
  preset: vuetifyPreset
})
