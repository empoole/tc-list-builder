'use client'

import { Unit } from '@/types/Unit'
import StatBlock from './StatBlock'
import { UnitNamesByFaction } from '@/types/Unit'
import { useRosterData } from '@/context/RosterDataContext'
import { UnitDataProvider } from '@/context/UnitDataContext'

export default function UnitBlock({ unitData }: { unitData: Unit }) {
    const { faction } = useRosterData()
    const units = UnitNamesByFaction[faction]

    const updateRoster = (unit: string) => {
        // TODO:
        // get unit data
        // subtract ducats
        // if not enough ducats can't add unit
    }

    return (
        <UnitDataProvider>
            <div className="flex space-between">
                <label htmlFor="name">
                    Name:
                    <input type="text" name="name" />
                </label>
                <label htmlFor="type">
                    Type:
                    <select
                        name="type"
                        id="type"
                        onChange={(e) => updateRoster(e.target.value)}
                    >
                        {units.map((unit) => (
                            <option>{unit}</option>
                        ))}
                    </select>
                </label>
            </div>
            <StatBlock unit={unitData} />
            <div>
                <label htmlFor="equipment">
                    <input type="text" name="equipment" />
                </label>
            </div>
        </UnitDataProvider>
    )
}
