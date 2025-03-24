import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check } from 'lucide-react'
import { Button } from "./ui/Button"

const pricingPlans = [
  {
    name: "Basic",
    price: "$29",
    period: "per month",
    description: "Perfect for individuals and small businesses just getting started.",
    features: [
      "Verify up to 100 credentials monthly",
      "Issue up to 50 credentials monthly",
      "Basic storage (1GB)",
      "Email support",
      "API access"
    ],
    highlighted: false,
    buttonText: "Get Started"
  },
  {
    name: "Professional",
    price: "$79",
    period: "per month",
    description: "Ideal for growing businesses with increased verification needs.",
    features: [
      "Verify up to 500 credentials monthly",
      "Issue up to 250 credentials monthly",
      "Enhanced storage (5GB)",
      "Priority email support",
      "Advanced API access",
      "Custom branding",
      "Analytics dashboard"
    ],
    highlighted: true,
    buttonText: "Get Started"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored pricing",
    description: "For large organizations with high-volume credential management needs.",
    features: [
      "Unlimited credential verification",
      "Unlimited credential issuance",
      "Premium storage (25GB+)",
      "24/7 dedicated support",
      "Full API access",
      "Custom integration",
      "Advanced analytics",
      "SLA guarantees",
      "Dedicated account manager"
    ],
    highlighted: false,
    buttonText: "Contact Sales"
  }
]

export function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-purple-950/10 via-black to-black relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-livvic">
            <span className="text-white">Simple,</span> <span className="text-purple-500">Transparent</span> <span className="text-white">Pricing</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-montserrat">
            Choose the plan that works best for your credential management needs. All plans include our core blockchain security features.
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5
                  }
                }
              }}
              className={`
                relative rounded-xl overflow-hidden
                ${plan.highlighted 
                  ? 'bg-gradient-to-br from-purple-900 to-purple-950 border-2 border-purple-500 shadow-[0_0_25px_rgba(147,51,234,0.3)]' 
                  : 'bg-gradient-to-br from-gray-900 to-black border border-purple-900/30'}
              `}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 w-full bg-purple-600 text-white text-center py-1 font-montserrat text-sm">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.highlighted ? 'pt-10' : ''}`}>
                <h3 className="text-2xl font-bold mb-2 text-white font-livvic">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2 font-montserrat">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6 font-montserrat">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`h-5 w-5 mr-2 mt-0.5 ${plan.highlighted ? 'text-purple-300' : 'text-purple-500'}`} />
                      <span className="text-gray-300 font-montserrat">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-6 font-montserrat ${
                    plan.highlighted 
                      ? 'bg-white hover:bg-gray-100 text-purple-900' 
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 font-montserrat">
            Need a custom solution? <a href="#contact" className="text-purple-400 hover:text-purple-300 underline">Contact our sales team</a> for a tailored package.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
