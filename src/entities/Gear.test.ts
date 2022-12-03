import { describe, expect, it, vi } from 'vitest'
import { createGear, useGearEffet } from './Gear'

describe('can create a new gear', () => {
    it('should create a type specific gear for a given rarity', () => {
        expect(createGear({ type: 'gloves', rarity: 'mythic' }))
            .toContain({
                type: 'gloves',
                rarity: 'mythic',
            })
    })

    it('should trigger gear effect', () => {
        const spy = vi.spyOn(console, 'log')
        useGearEffet('GEAR_TEST_EFFECT')
        expect(spy).toHaveBeenCalledWith('GEAR TEST EFFECT')
    })
})
