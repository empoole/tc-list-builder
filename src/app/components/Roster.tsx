'use client'

import { Factions, FactionsType } from '@/types/Factions'
import RosterList from './RosterList'
import { RosterDataProvider, useRosterData } from '@/context/RosterDataContext'

export default function Roster() {
    const { ducats, updateRosterData } = useRosterData()

    return (
        <RosterDataProvider>
            <section>
                <h2>Faction</h2>
                <select
                    name="faction"
                    id="faction"
                    onChange={(e) => {
                        // TODO: Clear current roster - no cross-faction lists (yet)
                        updateRosterData({
                            faction: e.target.value as FactionsType,
                        })
                    }}
                >
                    {Factions.map((faction) => (
                        <option>{faction}</option>
                    ))}
                </select>
            </section>
            <section className="flex space-between">
                <span>
                    +++
                    <input
                        type="number"
                        name="ducats"
                        placeholder="700"
                        value={ducats}
                        onChange={(e) => {
                            updateRosterData({
                                ducats: parseInt(e.target.value),
                            })
                        }}
                    />{' '}
                    Ducats Remaining +++
                </span>
            </section>
            <section>
                <h2>† Elites †</h2>
                <RosterList />
            </section>
            <section>
                <h2>† Troops †</h2>
                <RosterList />
            </section>
        </RosterDataProvider>
    )
}
