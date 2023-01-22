import { VuetifyPreset } from 'vuetify/types/services/presets'

import { ru } from 'vuetify/src/locale'

export const vuetifyPreset: Partial<VuetifyPreset> = {
  lang: {
    current: 'ru',
    locales: { ru },
    t: undefined as any
  }
}
