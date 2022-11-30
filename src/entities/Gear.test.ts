import { describe, expect, it } from 'vitest'
import { createGear } from './Gear'

describe('can create a new gear', () => {
    it('should create a type specific gear for a given rarity', () => {
        expect(createGear({ type: 'gloves', rarity: 'mythic' }))
            .toContain({
                type: 'gloves',
                rarity: 'mythic',
            })
    })
})
