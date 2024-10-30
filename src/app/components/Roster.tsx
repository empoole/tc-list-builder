'use client'

import { Factions, FactionsType } from '@/types/Factions'
import RosterList from './RosterList'
import { RosterDataProvider, useRosterData } from '@/context/RosterDataContext'
import { useState } from 'react'

export default function Roster() {
    const { ducats, updateRosterData, clearRosterData } = useRosterData()
    const [totalDucats, setTotalDucats] = useState(ducats)

    return (
        <RosterDataProvider>
            <div className="flex justify-between">
                <section className="flex justify-between">
                    <h4>Faction</h4>
                    <select
                        name="faction"
                        id="faction"
                        onChange={(e) => {
                            clearRosterData()
                            // TODO: clear all units
                            updateRosterData({
                                faction: e.target.value as FactionsType,
                            })
                        }}
                    >
                        {Factions.map((faction, i) => (
                            <option key={i}>{faction}</option>
                        ))}
                    </select>
                </section>
                <section>
                    <span>
                        +++ {ducats} /
                        <input
                            type="number"
                            className="w-12 text-center"
                            name="ducats"
                            placeholder="700"
                            value={totalDucats}
                            pattern="[0-9]*"
                            onChange={(e) => {
                                setTotalDucats(parseInt(e.target.value))
                            }}
                        />{' '}
                        Ducats Spent +++
                    </span>
                </section>
            </div>
            <section>
                <h2>† Elites †</h2>
                <RosterList />
            </section>
            <hr className="my-8" />
            <section>
                <h2>† Troops †</h2>
                <RosterList />
            </section>
        </RosterDataProvider>
    )
}
