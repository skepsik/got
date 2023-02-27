import { Model } from '@vuex-orm/core'
import moment from 'moment'
import { GameType } from './GameType'
import { House } from './House'

import { Result } from './Result'

export class Game extends Model {
  static entity = 'games'

  static fields () {
    return {
      id: this.uid(),
      played_at: this.number(Date.now()),
      type_id: this.string('classic'),
      type: this.belongsTo(GameType, 'type_id'),
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

  housesSet (): Result[] {
    const gameType = this.gameType()
    if (!gameType) return []
    return gameType.houses.map(({ id }) => new Result({ house_id: id, game_id: this.$id }))
  }

  gameType (): GameType | null {
    return GameType.query().with('houses').whereId(this.type_id).first()
  }

  id!: string
  played_at!: number
  type_id!: string
  type!: GameType
  results!: Result[]
  place!: string
}
