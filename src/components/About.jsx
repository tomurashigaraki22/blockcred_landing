"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const team = [
  {
    name: "Raphael Tomiwa",
    role: "Co-Founder",
    image: "/tomiwa.JPG",
    bio: "Blockchain expert with extensive experience in web3 systems and distributed ledger technologies.",
  },
  {
    name: "Robinson Honour",
    role: "Co-Founder",
    image: "/tomiwa.JPG",
    bio: "Specialized in cryptography and secure systems with a passion for building trustless verification solutions.",
  },
  {
    name: "Emmanuel Toluwani",
    role: "UI/UX Designer",
    image: "/tomiwa.JPG",
    bio: "Creative designer focused on building intuitive and beautiful interfaces for complex blockchain applications.",
  },
]

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-livvic">
            <span className="text-white">About</span> <span className="text-purple-500">BlockCred</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto font-montserrat">
            BlockCred is revolutionizing credential management through blockchain technology. Our mission is to provide
            secure, immutable, and cost-effective credential solutions for individuals and organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-purple-900/10 p-8 rounded-2xl border border-purple-900/30"
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-400 font-livvic">Our Mission</h3>
            <p className="text-gray-300 mb-4 font-montserrat">
              At BlockCred, we're committed to transforming how credentials are verified, issued, and stored using the
              power of blockchain technology.
            </p>
            <p className="text-gray-300 mb-4 font-montserrat">
              We believe that credential management should be secure, transparent, and accessible to everyone at
              affordable rates.
            </p>
            <p className="text-gray-300 font-montserrat">
              Built on the SUI blockchain, our platform ensures immutability and security while maintaining
              cost-effectiveness for all users.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-black/60 z-10 rounded-2xl"></div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOTPqts6DLdHj-HwN3AGM0tx7IPW1SWgJnvQ&s" alt="BlockCred Vision" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <h3 className="text-2xl font-bold mb-2 text-white font-livvic">Our Vision</h3>
              <p className="text-gray-200 font-montserrat">
                Creating a world where credential verification is seamless, trustless, and universally accessible.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-12 text-center font-livvic"
        >
          <span className="text-white">Meet Our</span> <span className="text-purple-500">Team</span>
        </motion.h3>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              className="bg-gradient-to-br from-gray-900 to-purple-950/20 rounded-xl overflow-hidden group"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-1 font-livvic">{member.name}</h4>
                <p className="text-purple-400 mb-4 font-montserrat">{member.role}</p>
                <p className="text-gray-400 font-montserrat">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

