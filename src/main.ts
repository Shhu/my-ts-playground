import { getByName } from './entities/Player'
import { getColor, Rarity } from './entities/Rarity'
import getWeightedRandom from '@/helpers/weightedRandom'
import { createGear } from '@/entities/Gear'
import { getItem, useGearEffet } from '@/entities/Item'

console.log(getByName('Shu'))
console.log(getColor('epique'))
console.log(getWeightedRandom<Rarity>(['legendary', 'mythic'], [.7, .3]))
console.log(createGear({ type: 'boots' }))
console.log(import.meta.env.VITE_API_BASE_URL)

const item = getItem()
item.effects.forEach((effect) => useGearEffet(effect))
