export const rarities = {
    'common': '#ffffff',
    'uncommon': '#1eff00',
    'rare': '#0070dd',
    'epique': '#a335ee',
    'legendary': '#ff8000',
    'mythic': '#fd0071',
} as const

export type Rarity = keyof typeof rarities
export type RarityColor = typeof rarities[keyof typeof rarities]


export const defaultRarityWeights = {
    rarity: Object.keys(rarities) as Rarity[],
    weight: [.3, .3, .2, .1, .07, .03],
}

export function getColor(name: Rarity): RarityColor {
    return rarities[name]
}
