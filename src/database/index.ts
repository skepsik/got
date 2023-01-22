import { Database } from '@vuex-orm/core'
import { User } from '@/models/User'
import { Game } from '@/models/Game'
import { House } from '@/models/House'
import { Result } from '@/models/Result'

const database = new Database()

database.register(User)
database.register(Game)
database.register(House)
database.register(Result)

export default database
