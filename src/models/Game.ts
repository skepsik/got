import { Model } from '@vuex-orm/core'
import moment from 'moment'

import { Result } from './Result'

export class Game extends Model {
  static entity = 'games'

  static fields () {
    return {
      id: this.uid(),
      played_at: this.number(Date.now()),
      type: this.attr('classic'),
      results: this.hasMany(Result, 'game_id'),
      place: this.string('')
    }
  }

  date (format = 'll'): string {
    return moment(this.played_at).format(format)
  }

  get dateISO (): string {
    return moment(this.played_at).format('YYYY-MM-DD')
  }

  set dateISO (value: string) {
    this.played_at = moment(value).valueOf()
  }

  id!: string
  played_at!: number
  type!: string
  results!: Result[]
  place!: string
}
