export interface Item {
    identifier: string,
    name: string
    description: string
    effects: Effect[]
}

const effects = {
    'ITEM_TEST_EFFECT': () => console.log('ITEM TEST EFFECT'),
} as const

export type Effect = keyof typeof effects

const items: Item[] = [
    {
        identifier: 'test_item',
        name: 'ITEM TEST NAME',
        description: 'ITEM TEST DESCRIPTION',
        effects: ['ITEM_TEST_EFFECT'],
    },
    {
        identifier: 'xp_potion_100_60',
        name: 'ITEM TEST NAME',
        description: 'ITEM TEST DESCRIPTION',
        effects: ['ITEM_TEST_EFFECT'],
    },
]

export function getItem(): Item {
    return items.find(item => item.name === 'ITEM TEST NAME')!
}

export function useItemEffet(effect: Effect) {
    return effects[effect]()
}
