const emblems = require.context('@/assets/emblems')

export function getEmblemFromId (id: string | null) {
  try {
    return emblems(`./${id}.png`)
  } catch (error) {
    return ''
  }
}
