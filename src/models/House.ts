import { Model } from '@vuex-orm/core'

import { getEmblemFromId } from '@/helpers/emblems'

export class House extends Model {
  static entity = 'houses'

  static fields () {
    return {
      id: this.uid(),
      name: this.string(''),
      order: this.number(0)
    }
  }

  path () {
    return getEmblemFromId(this.id)
  }

  id!: string
  name!: string
  order!: number
}
