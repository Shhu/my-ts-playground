import { Uuid } from '@/helpers/uuid'

export interface Inventory {
    uuid: Uuid<'Inventory'>
    player_uuid: Uuid<'Player'>
    items: Uuid<'Item'>[]
}

interface ItemPayload {
    item: Uuid<'Item'>,
    quantity: number
}

export function addItem(item: ItemPayload, inventory: Uuid<'Inventory'>): void {
    console.log('addItem', item, inventory)
}
