const rarity = {
    'common': '#ffffff',
    'uncommon': '#1eff00',
    'rare': '#0070dd',
    'epique': '#a335ee',
    'legendary': '#ff8000',
    'mythic': '#fd0071',
} as const

export type Rarity = keyof typeof rarity
export type RarityColor = typeof rarity[keyof typeof rarity]


export const defaultRarityWeights = {
    rarity: Object.keys(rarity) as Rarity[],
    weight: [.3, .3, .2, .1, .07, .03],
}

export function getColor(name: Rarity): RarityColor {
    return rarity[name]
}
