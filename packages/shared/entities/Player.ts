import { Unit } from './Unit'
import { uuid, Uuid } from '../helpers/uuid'
import { Inventory } from './Inventory'

export interface Player {
    uuid: Uuid<'Player'>
    name: string
    units?: Unit[]
    inventory?: Inventory
}

export function getByUuid(uuid: Uuid<'Player'>): Player {
    return { uuid, name: 'Shu' }
}

export function getByName(name: string): Player {
    return { uuid: uuid(), name }
}
