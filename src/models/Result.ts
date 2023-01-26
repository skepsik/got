import { Model } from '@vuex-orm/core'

import { Game } from './Game'
import { User } from './User'
import { House } from './House'

export class Result extends Model {
  static entity = 'results'

  static fields () {
    return {
      id: this.uid(),
      user_id: this.string(null).nullable(),
      user: this.belongsTo(User, 'user_id'),
      game_id: this.string(null).nullable(),
      game: this.belongsTo(Game, 'game_id'),
      house_id: this.string(null).nullable(),
      house: this.belongsTo(House, 'house_id'),
      score: this.number(null).nullable(),
      landings: this.number(null).nullable(),
      supply: this.number(null).nullable(),
      throne: this.number(null).nullable()
    }
  }

  isVassal () {
    return User.isVassal(this.user_id)
  }

  id!: string
  user_id!: string | null
  user!: User | null
  game_id!: string | null
  game!: Game | null
  house_id!: string | null
  house!: House | null
  score!: number | null
  landings!: number | null
  supply!: number | null
  throne!: number | null
}
