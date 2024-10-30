'use client'

import { Unit } from '@/types/Unit'

export default function StatBlock({ unit }: { unit: Unit }) {
    return (
        <table className="border mt-4 m-b-2">
            <thead>
                <tr>
                    <th className="border p-2">Movement</th>
                    <th className="border p-2">Ranged</th>
                    <th className="border p-2">Melee</th>
                    <th className="border p-2">Armour</th>
                    <th className="border p-2">Ducats</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border p-2">{unit.movement}</td>
                    <td className="border p-2">{unit.ranged}</td>
                    <td className="border p-2">{unit.melee}</td>
                    <td className="border p-2">{unit.armour}</td>
                    <td className="border p-2">{unit.ducats}</td>
                </tr>
            </tbody>
        </table>
    )
}
