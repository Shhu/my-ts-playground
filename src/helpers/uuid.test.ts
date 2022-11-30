import { describe, expect, it } from 'vitest'
import { uuid } from './uuid'

describe('test createUuid', () => {
    const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi

    it('must return a valid uuid', () => {
        expect(uuidRegex.test(uuid())).toBe(true)
    })
})
