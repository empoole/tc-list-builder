'use client'

import { useState } from 'react'
import UnitBlock from './UnitBlock'
import { Unit } from '@/types/Unit'

export default function RosterList() {
    const [units, setUnits] = useState<Unit[]>([
        new Unit({
            name: '',
            type: null,
            movement: 0,
            ranged: 0,
            melee: 0,
            armour: 0,
            ducats: 0,
            equipment: [],
            abilities: [],
        }),
    ])

    return (
        <>
            <ul>
                {units.map((unit, i) => (
                    <li key={i}>
                        <UnitBlock unitData={unit} />
                    </li>
                ))}
            </ul>
            <button
                className="p-1 rounded"
                onClick={() =>
                    setUnits([
                        ...units,
                        new Unit({
                            name: '',
                            type: null,
                            movement: 0,
                            ranged: 0,
                            melee: 0,
                            armour: 0,
                            ducats: 0,
                            equipment: [],
                            abilities: [],
                        }),
                    ])
                }
            >
                + Add Unit +
            </button>
        </>
    )
}
