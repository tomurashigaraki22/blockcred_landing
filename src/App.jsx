import { BlockCredHero } from "./components/Hero"
import { Features } from "./components/Features"
import { About } from "./components/About"
import { Pricing } from "./components/Pricing"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import "./index.css"
import { Header } from "./components/Header"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <BlockCredHero />
      <Features />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
