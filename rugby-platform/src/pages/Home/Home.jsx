import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Hero/Hero"
import FeatureSection from "../../components/FeatureSection/FeatureSection"
import StatsSection from "../../components/StatsSection/StatsSection"
import Footer from "../../components/Footer/Footer"

function Home() {
    return(
        <>
            <Navbar />

            <main className="pt-24">

                <Hero />

                <FeatureSection />

                <StatsSection />

            </main>

            <Footer />
            
        </>   
    )
}

export default Home