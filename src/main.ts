import { getByName } from './entities/Player'
import { getColor, Rarity } from './entities/Rarity'
import weightedRandom from '@/helpers/weightedRandom'

console.log(`%O player`, getByName('Shu'))

const rarity = weightedRandom<Rarity>(['legendary', 'mythic'], [.7, .3])
const rarityColor = getColor(rarity)
console.log(`%c__________`, `background-color: ${ rarityColor }; color:${ rarityColor }`, rarity)
