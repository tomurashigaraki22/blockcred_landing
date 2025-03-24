import { useRef, useEffect } from "react"
import { Button } from "./ui/Button"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Environment } from "@react-three/drei"
import { motion } from "framer-motion"

function FloatingCanvas() {
  const meshRef = useRef()
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
  })
  
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} castShadow>
        <boxGeometry args={[2.5, 3.5, 0.2]} />
        <meshStandardMaterial 
          color="#9333ea" 
          metalness={0.5}
          roughness={0.2}
          emissive="#4c1d95"
          emissiveIntensity={0.2}
          opacity={0.9}
          transparent
        />
      </mesh>
    </Float>
  )
}

export function BlockCredHero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-block bg-purple-900/30 px-4 py-1 rounded-full backdrop-blur-sm">
              <p className="text-purple-300 font-montserrat text-sm">Powered by SUI Blockchain</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-livvic leading-tight">
              <span className="text-white">Secure</span> <span className="text-purple-500">Credential</span> <span className="text-white">Management</span> <span className="text-purple-500">Solution</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl font-montserrat max-w-xl">
              BlockCred provides immutable credential verification, issuance, and storage at cost-friendly rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md font-montserrat text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-900/30 px-8 py-6 rounded-md font-montserrat text-lg">
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[400px] md:h-[500px] w-full"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <FloatingCanvas />
              <Environment preset="night" />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}
