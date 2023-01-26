import { Model } from '@vuex-orm/core'
import { Game } from './Game'
import { House } from './House'

export class GameType extends Model {
  static entity = 'gameTypes'

  static fields () {
    return {
      id: this.uid(),
      label: this.string(''),
      houses_ids: this.attr(null),
      houses: this.hasManyBy(House, 'houses_ids'),
      games: this.hasMany(Game, 'type'),
      vassals: this.boolean(false)
    }
  }

  id!: string
  label!: string
  houses_ids!: string[]
  houses!: House[]
  games!: Game[]
  vassals!: boolean
}
