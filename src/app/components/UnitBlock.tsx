'use client'

import { Unit } from '@/types/Unit'
import StatBlock from './StatBlock'
import { UnitNamesByFaction } from '@/types/Unit'
import { useRosterData } from '@/context/RosterDataContext'
import { UnitDataProvider } from '@/context/UnitDataContext'

export default function UnitBlock({ unitData }: { unitData: Unit }) {
    const { faction, ducats, updateRosterData } = useRosterData()
    const units = UnitNamesByFaction[faction]

    const updateRoster = (unit: string) => {
        // TODO:
        // get unit data
        const ducatsRemaining = ducats - unitData.ducats

        if (ducatsRemaining < 0) return false

        updateRosterData({ ducats: ducatsRemaining })

        return unit
    }

    return (
        <UnitDataProvider>
            <div className="border my-4 p-4">
                <div className="flex justify-between ">
                    <label htmlFor="name">
                        Name: <input type="text" name="name" />
                    </label>
                    <label htmlFor="type">
                        Type:{' '}
                        <select
                            name="type"
                            id="type"
                            onChange={(e) => updateRoster(e.target.value)}
                        >
                            {units.map((unit, i) => (
                                <option key={i}>{unit}</option>
                            ))}
                        </select>
                    </label>
                </div>
                <div className="flex justify-between">
                    <StatBlock unit={unitData} />
                    <section>
                        <label htmlFor="equipment">
                            Equipment: <input type="text" name="equipment" />
                        </label>
                    </section>
                </div>
            </div>
        </UnitDataProvider>
    )
}
