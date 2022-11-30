import { Gear } from './Gear'
import { Uuid } from '@/helpers/uuid'

export interface Unit {
    uuid: Uuid<'Unit'>
    name: string
    xp: number
    inventory: {
        head: Gear
        chest: Gear
    }
}

export default function (unit: Unit) {
    const uuid = unit.uuid
    const name = unit.name

    return { uuid, name }
}
