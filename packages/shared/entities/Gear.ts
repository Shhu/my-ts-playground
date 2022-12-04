import { defaultRarityWeights, Rarity } from './Rarity'
import { uuid, Uuid } from '../helpers/uuid'
import getWeightedRandom from '../../server/helpers/weightedRandom'
import { PartialWithRequired } from '../types/AdvancedPartial'

export interface Gear {
    uuid: Uuid<'Gear'>
    rarity: Rarity,
    type: Type,
    effects: Effect[]
}

const types = [
    'helmet',
    'chest',
    'gloves',
    'boots',
] as const

type Type = typeof types[keyof typeof types]

export function createGear(options: PartialWithRequired<Gear, 'type'>): Gear {
    if (!options.type || !types.includes(options.type as keyof Type))
        throw 'CreateGear options must have a valid type'

    return {
        uuid: options.uuid ?? uuid(),
        rarity: options.rarity ?? getWeightedRandom<Rarity>(
            defaultRarityWeights.rarity,
            defaultRarityWeights.weight,
        ),
        effects: [],
        ...options,
    }
}

const effects = {
    'GEAR_TEST_EFFECT': () => console.log('GEAR TEST EFFECT'),
} as const

export type Effect = keyof typeof effects

export function useGearEffet(effect: Effect) {
    return effects[effect]()
}
