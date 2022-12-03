import { defaultRarityWeights, Rarity } from './Rarity'
import { uuid, Uuid } from '@/helpers/uuid'
import getWeightedRandom from '@/helpers/weightedRandom'

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
