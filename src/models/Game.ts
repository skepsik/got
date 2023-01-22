import { Model } from '@vuex-orm/core'

import { Result } from './Result'

export class Game extends Model {
  static entity = 'games'

  static fields () {
    return {
      id: this.uid(),
      date: this.string(''),
      results: this.hasMany(Result, 'game_id')
    }
  }

  id!: string
  date!: string
}
