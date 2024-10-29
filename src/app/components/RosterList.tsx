'use client'

import { useState } from 'react'
import UnitBlock from './UnitBlock'
import { Unit } from '@/types/Unit'

export default function RosterList() {
    const newUnit = new Unit({
        name: '',
        type: null,
        movement: 0,
        ranged: 0,
        melee: 0,
        armour: 0,
        ducats: 0,
        equipment: [],
        abilities: [],
    })
    const [units, setUnits] = useState<Unit[]>([newUnit])

    return (
        <>
            <ul>
                {units.map((unit) => (
                    <li>
                        <UnitBlock unitData={unit} />
                    </li>
                ))}
            </ul>
            <button onClick={() => setUnits([...units, newUnit])}>
                † Add Unit †
            </button>
        </>
    )
}
