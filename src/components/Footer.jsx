import { Github, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="/" className="inline-block">
              <span className="text-2xl font-bold text-purple-500 font-livvic">BlockCred</span>
            </a>
            <p className="mt-4 text-gray-400 font-montserrat">Secure credential management on the SUI blockchain.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4 font-livvic">Company</h3>
            <ul className="space-y-2">
              {["About", "Team", "Careers", "Blog", "Press"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors font-montserrat">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4 font-livvic">Resources</h3>
            <ul className="space-y-2">
              {["Documentation", "API", "Guides", "Case Studies", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors font-montserrat">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4 font-livvic">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors font-montserrat">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-montserrat">
            &copy; {new Date().getFullYear()} BlockCred. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm font-montserrat">
              Designed and developed by Raphael Tomiwa, Robinson Honour, and Emmanuel Toluwani
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

