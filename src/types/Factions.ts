export const Factions = [
    'New Antioch',
    'Trench Pilgrims',
    'Iron Sultanate',
    'Heretic Legions',
    'Cult of the Black Grail',
    'Court of the Seven-Headed Serpent',
] as const

export type FactionsType = (typeof Factions)[number]
