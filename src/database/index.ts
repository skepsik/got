import { Database } from '@vuex-orm/core'

import { Game } from '@/models/Game'
import { GameType } from '@/models/GameType'
import { House } from '@/models/House'
import { Result } from '@/models/Result'
import { User } from '@/models/User'

const database = new Database()

database.register(Game)
database.register(GameType)
database.register(House)
database.register(Result)
database.register(User)

export default database
