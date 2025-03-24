import { BlockCredHero } from "./components/hero"
import { Features } from "./components/features"
import { About } from "./components/about"
import { Pricing } from "./components/pricing"
import { Contact } from "./components/contact"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import "./index.css"

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
