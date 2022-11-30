import { describe, expect, it } from 'vitest'
import { getByName } from './Player.js'

describe('Player test', () => {
    it('return the player name', async () => {
        expect(getByName('Shu')).toContain({ name: 'Shu' })
    })
})

