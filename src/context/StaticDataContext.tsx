'use client'

import { createContext, useContext } from 'react'

type StaticData = {
    unitsData: any
}

interface StaticDataContextType {
    unitsData: any
}

const StaticDataContext = createContext<StaticDataContextType>({
    unitsData: null,
})

export const StaticDataProvider = ({
    unitsData,
    children,
}: {
    unitsData: any
    children: React.ReactNode
}) => {
    return (
        <StaticDataContext.Provider value={{ ...unitsData }}>
            {children}
        </StaticDataContext.Provider>
    )
}

export const useStaticData = () => useContext(StaticDataContext)
