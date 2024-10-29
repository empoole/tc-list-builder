export class Unit {
    name: string
    type:
        | NewAntiochUnitNamesType
        | TrenchPilgrimUnitNamesType
        | HereticUnitNamesType
        | BlackGrailUnitNamesType
        | IronSultanateUnitNamesType
        | MercenaryUnitNamesType
        | CourtUnitNamesType
        | null
    movement: number
    ranged: number
    melee: number
    armour: number
    ducats: number
    equipment: string[]
    abilities: string[]
    constructor(unit: Unit) {
        this.name = unit.name
        this.type = unit.type
        this.movement = unit.movement
        this.ranged = unit.ranged
        this.melee = unit.melee
        this.armour = unit.armour
        this.ducats = unit.ducats
        this.equipment = unit.equipment
        this.abilities = unit.abilities
    }
}

export const NewAntiochUnitNames = [
    'Lieutenant',
    'Trench Cleric',
    'Sniper Priest',
    'Yeomen',
    'Shocktrooper',
    'Combat Engineer',
    'Mechanized Heavy Infantry',
    'Combat Medic',
] as const
export const TrenchPilgrimUnitNames = [
    'War Prophet',
    'Castigator',
    'Communicant',
    'Trench Pilgrim',
    'Ecclesiastic Prisoner',
    'Stigmatic Nun',
    'Anchorite Shrine',
] as const
export const IronSultanateUnitNames = [
    'Yüzbaşı Captain',
    'Jabirean Alchemist',
    'Sultanate Assassin',
    'Azeb',
    'Sultanate Sapper',
    'Lion of Jabir',
    'Janissary',
    'Brazen Bull',
] as const
export const BlackGrailUnitNames = [
    'Lord of Tumours',
    'Plauge Knight',
    'Corpse Guard',
    'Hound of the Black Grail',
    'Grail Thrall',
    'Fly Thrall',
    'Herald of Beelzebub',
    'Amalgam',
] as const
export const HereticUnitNames = [
    'Heretic Priest',
    'Death Commando',
    'Heretic Chorister',
    'Heretic Trooper',
    'Annointed Heavy Infantry',
    'War Wolf Assault Beast',
    'Artillery Witch',
] as const
export const MercenaryUnitNames = [
    'Witchburner',
    'Communicant Anti-Tank Hunter',
    'Mendelist Ammo Monk',
    'Sin Eater',
    'Goetic Warlock',
    'Observer',
    'Mamluk Faris',
] as const
export const CourtUnitNames = [] as const

type NewAntiochUnitNamesType = (typeof NewAntiochUnitNames)[number]
type TrenchPilgrimUnitNamesType = (typeof TrenchPilgrimUnitNames)[number]
type BlackGrailUnitNamesType = (typeof BlackGrailUnitNames)[number]
type HereticUnitNamesType = (typeof HereticUnitNames)[number]
type IronSultanateUnitNamesType = (typeof IronSultanateUnitNames)[number]
type CourtUnitNamesType = (typeof CourtUnitNames)[number]
type MercenaryUnitNamesType = (typeof MercenaryUnitNames)[number]

export const UnitNamesByFaction = {
    'New Antioch': NewAntiochUnitNames,
    'Trench Pilgrims': TrenchPilgrimUnitNames,
    'Iron Sultanate': IronSultanateUnitNames,
    'Heretic Legions': HereticUnitNames,
    'Cult of the Black Grail': BlackGrailUnitNames,
    'Court of the Seven-Headed Serpent': CourtUnitNames,
    Mercenaries: MercenaryUnitNames,
}
