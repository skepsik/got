import { Model } from '@vuex-orm/core'

export class User extends Model {
  static entity = 'users'

  static fields () {
    return {
      id: this.uid(),
      telegram: this.string(''),
      phone: this.string('')
    }
  }
}
