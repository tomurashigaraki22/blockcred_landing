
import { motion } from "framer-motion"
import { Shield, FileCheck, Database, Zap, Lock, Coins } from "lucide-react"
import { useInView } from "react-intersection-observer"

const features = [
  {
    icon: <Shield className="h-10 w-10 text-purple-500" />,
    title: "Credential Verification",
    description: "Verify the authenticity of credentials with blockchain-backed security and immutability.",
  },
  {
    icon: <FileCheck className="h-10 w-10 text-purple-500" />,
    title: "Credential Issuance",
    description: "Issue tamper-proof digital credentials that can be instantly verified by any authorized party.",
  },
  {
    icon: <Database className="h-10 w-10 text-purple-500" />,
    title: "Credential Storage",
    description: "Store credentials securely on the SUI blockchain with redundant backups and encryption.",
  },
  {
    icon: <Zap className="h-10 w-10 text-purple-500" />,
    title: "Fast Processing",
    description: "Experience lightning-fast verification and issuance with our optimized blockchain solution.",
  },
  {
    icon: <Lock className="h-10 w-10 text-purple-500" />,
    title: "Enhanced Security",
    description: "Benefit from multi-layer security protocols that protect your credentials from unauthorized access.",
  },
  {
    icon: <Coins className="h-10 w-10 text-purple-500" />,
    title: "Cost Effective",
    description: "Enjoy affordable rates for all credential management services without compromising on quality.",
  },
]

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black via-black to-purple-950/20 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 font-livvic"
          >
            <span className="text-white">Our</span> <span className="text-purple-500">Features</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto font-montserrat"
          >
            BlockCred provides a comprehensive suite of credential management services powered by the SUI blockchain.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-purple-950/30 p-8 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] group"
            >
              <div className="mb-4 p-3 bg-purple-900/20 rounded-lg inline-block group-hover:bg-purple-900/40 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white font-livvic group-hover:text-purple-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-montserrat">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-purple-950/10 to-transparent"></div>
    </section>
  )
}

