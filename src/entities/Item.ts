import { uuid, Uuid } from '@/helpers/uuid'

export interface Item {
    uuid: Uuid<'Inventory'>
    name: string
    description: string
    effects: Effect[]
}

const effects = {
    'ITEM_TEST_EFFECT': () => console.log('ITEM TEST EFFECT'),
} as const

export type Effect = keyof typeof effects

export function getItem(): Item {
    return {
        uuid: uuid(),
        name: 'Yolo',
        description: 'description',
        effects: ['ITEM_TEST_EFFECT'],
    }
}

export function useItemEffet(effect: Effect) {
    return effects[effect]()
}
