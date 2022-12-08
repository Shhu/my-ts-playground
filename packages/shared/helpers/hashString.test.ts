import { describe, expect, it } from 'vitest'
import hashString from './hashString'

describe('test hashString helper', () => {
    it('should return true for a valid string', () => {
        expect(hashString('test') === hashString('test')).toBe(true)
    })
    it('should return false for an invalid string', () => {
        expect(hashString('test') === hashString('test2')).toBe(false)
    })
})

