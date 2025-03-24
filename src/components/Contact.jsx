"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"
import { Textarea } from "./ui/TextArea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
    alert("Thanks for your message! We'll get back to you soon.")
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-livvic">
            <span className="text-white">Get in</span> <span className="text-purple-500">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-montserrat">
            Have questions about BlockCred? Our team is here to help. Reach out to us and we'll get back to you as soon
            as possible.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div className="bg-gradient-to-br from-gray-900 to-purple-950/20 p-8 rounded-xl border border-purple-900/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 font-montserrat">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 font-montserrat">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1 font-montserrat">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 font-montserrat">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-montserrat flex items-center justify-center gap-2 py-6"
              >
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-purple-950/20 p-8 rounded-xl border border-purple-900/30">
              <h3 className="text-xl font-bold mb-6 text-white font-livvic">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                  <div>
                    <p className="text-gray-300 font-medium font-montserrat">Email</p>
                    <a
                      href="mailto:info@blockcred.com"
                      className="text-purple-400 hover:text-purple-300 font-montserrat"
                    >
                      devtomiwa9@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                  <div>
                    <p className="text-gray-300 font-medium font-montserrat">Phone</p>
                    <a href="tel:+1234567890" className="text-purple-400 hover:text-purple-300 font-montserrat">
                      +234 (704) 312-7894
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                  <div>
                    <p className="text-gray-300 font-medium font-montserrat">Location</p>
                    <p className="text-purple-400 font-montserrat">Port Harcourt, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-purple-950/20 p-8 rounded-xl border border-purple-900/30">
              <h3 className="text-xl font-bold mb-4 text-white font-livvic">Office Hours</h3>
              <p className="text-gray-300 font-montserrat">Monday - Friday: 9:00 AM - 6:00 PM WAT</p>
              <p className="text-gray-300 font-montserrat">Saturday: 10:00 AM - 2:00 PM WAT</p>
              <p className="text-gray-300 font-montserrat">Sunday: Closed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

