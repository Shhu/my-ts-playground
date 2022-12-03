import { describe, expect, it } from 'vitest'
import EventBus from '@/helpers/eventBus'

describe('test the event bus', () => {
    it('must trigger a callback when event is fired', async () => {
        let testFired: boolean = false

        EventBus().subscribe('battle.victory', () => testFired = true)
        await EventBus().fire('battle.victory')

        expect(testFired).toBe(true)
    })

    it(`callback should't be triggered when event is unsubscribed`, async () => {
        let testNotFired: boolean = false

        const event = EventBus().subscribe('battle.victory', () => testNotFired = true)
        EventBus().unsubscribe('battle.victory', event)
        await EventBus().fire('battle.victory')

        expect(testNotFired).toBe(false)
    })
})
