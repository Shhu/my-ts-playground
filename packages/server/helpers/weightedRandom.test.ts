import getWeightedRandom from './weightedRandom'
import { describe, expect, it } from 'vitest'
import { Rarity } from '../../shared/entities/Rarity'

describe('test weighted random', () => {
    it('should correctly do random selection based on weights in straightforward cases', () => {
        expect(getWeightedRandom<Rarity>(['common', 'uncommon', 'epique'], [1, 0, 0])).toEqual('common')
        expect(getWeightedRandom<Rarity>(['common', 'uncommon', 'epique'], [0, 1, 0])).toEqual('uncommon')
        expect(getWeightedRandom<Rarity>(['common', 'uncommon', 'epique'], [0, 0, 1])).toEqual('epique')
    })

    it('should respect weights', () => {
        const iteration = 10000

        let matched = 0
        for (let i = 0; i < iteration; i++) {
            if (getWeightedRandom<Rarity>(['common', 'mythic'], [.9, .1]) === 'mythic') {
                matched++
            }
        }

        expect(matched).toBeGreaterThan(950)
        expect(matched).toBeLessThan(1150)
    })
})

