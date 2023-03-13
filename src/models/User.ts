import { Model } from '@vuex-orm/core'
import { sumBy } from 'lodash-es'
import { Result } from './Result'

export class User extends Model {
  static entity = 'users'

  static readonly VASSAL = null

  static fields () {
    return {
      id: this.uid(),
      telegram: this.string(''),
      phone: this.string(''),
      name: this.string('')
    }
  }

  get label (): string {
    return this.telegram ? `@${this.telegram}` : this.name
  }

  static isVassal (id: string | null) {
    return id === User.VASSAL
  }

  get results (): Result[] {
    return Result.query().where('user_id', this.$id).get()
  }

  get totalGames (): number {
    return this.results.length
  }

  get totalScores (): number {
    return sumBy(this.results, 'score')
  }

  get rating (): number {
    if (this.totalGames === 0) {
      return 0
    }
    return Math.round(100 * this.totalScores / this.totalGames)
  }

  id!: string | null
  telegram!: string
  phone!: string
  name!: string
}
