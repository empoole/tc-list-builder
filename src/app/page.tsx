import Header from './components/Header'
import Roster from './components/Roster'
import Footer from './components/Footer'
import { StaticDataProvider } from '@/context/StaticDataContext'

import { promises as fs } from 'fs'

export default async function Home() {
    const units = await fs.readFile(`${process.cwd()}/data/Units.json`, 'utf-8')
    const unitsData = JSON.parse(units)

    return (
        <main className="container mx-auto">
            <Header />
            <StaticDataProvider unitsData={unitsData}>
                <Roster />
            </StaticDataProvider>
            <Footer />
        </main>
    )
}
