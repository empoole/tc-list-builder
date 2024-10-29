'use client'

import { Unit } from '@/types/Unit'

export default function StatBlock({ unit }: { unit: Unit }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Movement</th>
                    <th>Ranged</th>
                    <th>Melee</th>
                    <th>Armour</th>
                    <th>Ducats</th>
                </tr>
            </thead>
            <tbody>
                <td>{unit.movement}</td>
                <td>{unit.ranged}</td>
                <td>{unit.melee}</td>
                <td>{unit.armour}</td>
                <td>{unit.ducats}</td>
            </tbody>
        </table>
    )
}
