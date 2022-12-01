import { Uuid } from '@/helpers/uuid'

export interface Item {
    uuid: Uuid<'Inventory'>
    name: string
    description: string
    effect: typeof GearEffet
}

function GearEffet() {
    //
}

