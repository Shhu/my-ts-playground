import { getByName } from './entities/Player'
import { getColor, Rarity } from './entities/Rarity'
import getWeightedRandom from '@/helpers/weightedRandom'
import { createGear } from '@/entities/Gear'
import { getItem, useGearEffet } from '@/entities/Item'

console.log(`%O player`, getByName('Shu'))
console.log(`%O createGear`, createGear({ type: 'boots' }))

const rarity = getWeightedRandom<Rarity>(['legendary', 'mythic'], [.7, .3])
const rarityColor = getColor(rarity)
console.log(`%c__________`, `background-color: ${ rarityColor }; color:${ rarityColor }`, rarity)

const item = getItem()
item.effects.forEach((effect) => useGearEffet(effect))
