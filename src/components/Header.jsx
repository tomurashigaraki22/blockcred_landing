import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'
import { Button } from "./ui/Button"
import { cn } from "../lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-black/90 backdrop-blur-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-purple-500 font-livvic">BlockCred</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Features", "About", "Pricing", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-purple-400 transition-colors font-montserrat"
            >
              {item}
            </a>
          ))}
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-montserrat">
            Get Started
          </Button>
        </nav>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-4 animate-fadeIn">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {["Home", "Features", "About", "Pricing", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-purple-400 transition-colors py-2 font-montserrat"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full font-montserrat">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
