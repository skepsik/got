export type Rule = (v: string) => true | string

export type RulesSet = Record<string, Rule | ((b: boolean) => Rule)>

export const Rules: RulesSet = {
  required: (b: boolean) => (v: string) => b || !!v || 'Обязательное поле',
  score: (b: boolean) => (v: string) => b || parseInt(v) >= 0 || 'Неверное значение',
  landings: (b: boolean) => (v: string) => b || parseInt(v) >= 0 || 'Неверное значение',
  supply: (b: boolean) => (v: string) => b || (parseInt(v) >= 1 && parseInt(v) <= 6) || 'Возможные значения от 1 до 6',
  throne: (b: boolean) => (v: string) => b || (parseInt(v) >= 1 && parseInt(v) <= 8) || 'Возможные значения от 1 до 8'
}
