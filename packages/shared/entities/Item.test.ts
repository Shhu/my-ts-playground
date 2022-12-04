import { describe, expect, it, vi } from 'vitest'
import { useItemEffet } from './Item'

describe('test item', () => {
    it('should trigger item effect', () => {
        const spy = vi.spyOn(console, 'log')
        useItemEffet('ITEM_TEST_EFFECT')
        expect(spy).toHaveBeenCalledWith('ITEM TEST EFFECT')
    })
})
