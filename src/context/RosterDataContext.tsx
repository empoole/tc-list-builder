'use client'

import { FactionsType } from '@/types/Factions'
import { useState, createContext, useContext } from 'react'

type RosterData = {
    faction: FactionsType
    ducats: number
}

interface RosterDataContextType {
    faction: FactionsType
    ducats: number
    updateRosterData: (newSettings: Partial<RosterData>) => void
    clearRosterData: () => void
}

const defaultValues: RosterData = {
    faction: 'New Antioch',
    ducats: 700,
}

const RosterDataContext = createContext<RosterDataContextType>({
    ...defaultValues,
    updateRosterData: () => {},
    clearRosterData: () => {},
})

export const RosterDataProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [values, setValues] = useState(defaultValues)

    const updateRosterData = (newValues: Partial<RosterData>) => {
        setValues({ ...values, ...newValues })
    }

    const clearRosterData = () => {
        setValues(defaultValues)
    }

    return (
        <RosterDataContext.Provider
            value={{ ...values, updateRosterData, clearRosterData }}
        >
            {children}
        </RosterDataContext.Provider>
    )
}

export const useRosterData = () => useContext(RosterDataContext)
