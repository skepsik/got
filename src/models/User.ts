import { Model } from '@vuex-orm/core'
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

  get totalGames (): number {
    return Result.query().where('user_id', this.$id).get().length
  }

  id!: string | null
  telegram!: string
  phone!: string
  name!: string
}
