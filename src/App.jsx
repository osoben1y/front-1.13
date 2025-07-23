import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import AwardsSection from "./components/AwardsSection"
import TestimonialsSection from "./components/TestimonialsSection"
import "./styles/globals.css"

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Footer />
        <HeroSection />
        <AwardsSection />
        <TestimonialsSection />
      </div>
    </>
  )
}

export default App
