import { uuid, Uuid } from '@/helpers/uuid'

export interface Item {
    uuid: Uuid<'Inventory'>
    name: string
    description: string
    effects: Effect[]
}

const effects = {
    'console_log_1': () => console.log('EFFECT 1'),
    'console_log_2': () => console.log('EFFECT 2'),
    'console_log_3': () => console.log('EFFECT 3'),
} as const

export type Effect = keyof typeof effects

export function useGearEffet(effect: Effect) {
    return effects[effect]()
}

export function getItem(): Item {
    return {
        uuid: uuid(),
        name: 'Yolo',
        description: 'description',
        effects: ['console_log_1', 'console_log_3'],
    }
}
