'use client'

import { useState, createContext, useContext } from 'react'
import { Unit } from '@/types/Unit'

const defaultValues = new Unit({
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

interface UnitDataContextType extends Unit {
    updateUnitData: (newSettings: Partial<Unit>) => void
}

const UnitDataContext = createContext<UnitDataContextType>({
    ...defaultValues,
    updateUnitData: () => {},
})

export const UnitDataProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [values, setValues] = useState(defaultValues)

    const updateUnitData = (newValues: Partial<Unit>) => {
        setValues({ ...values, ...newValues })
    }

    return (
        <UnitDataContext.Provider value={{ ...values, updateUnitData }}>
            {children}
        </UnitDataContext.Provider>
    )
}

export const useUnitData = () => useContext(UnitDataContext)
