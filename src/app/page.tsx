import Header from './components/Header'
import Roster from './components/Roster'
import Footer from './components/Footer'

export default function Home() {
    return (
        <main className="container mx-auto">
            <Header />
            <Roster />
            <Footer />
        </main>
    )
}
