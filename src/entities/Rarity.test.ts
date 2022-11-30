import { getColor } from './Rarity'
import { describe, expect, it } from 'vitest'

describe('test rarity', () => {
    it('should return the right color', () => {
        expect(getColor('uncommon')).toEqual('#1eff00')
    })
})
