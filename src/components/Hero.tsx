import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Suspense } from "react";

const AnimatedGeometry = () => {
  return (
    <group>
      {/* Main rotating torus */}
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[2, 0.8, 16, 100]} />
        <meshStandardMaterial
          color="#3b82f6"
          wireframe={false}
          transparent={true}
          opacity={0.8}
          emissive="#1e40af"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Inner rotating sphere */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#60a5fa"
          wireframe={true}
          transparent={true}
          opacity={0.3}
        />
      </mesh>
      
      {/* Floating particles around geometry */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(i * 0.314) * 4,
            Math.sin(i * 0.314) * 4,
            Math.sin(i * 0.628) * 2
          ]}
        >
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#1e40af"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-primary rounded-full"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random(),
      }}
      animate={{
        y: [null, Math.random() * window.innerHeight],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
      }}
    />
  ));

  return <div className="fixed inset-0 pointer-events-none z-0">{particles}</div>;
};

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-cosmic"
    >
      <FloatingParticles />
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
            <AnimatedGeometry />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-4xl md:text-7xl font-bold text-gradient leading-tight whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block">Front-End Developer</span>
              <span className="block neon-text">& Graphic Designer</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Welcome to my{" "}
              <span className="text-primary font-semibold">Portfolio.</span>{" "}
             
              Designing with intent. Developing with precision. Innovating with AI.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="glass-button text-lg px-8 py-4 group"
                onClick={scrollToNext}
              >
                <span className="relative">
                  Explore My Work
                  <motion.div
                    className="absolute inset-0 bg-gradient-electric opacity-0 group-hover:opacity-100 rounded-md -z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </Button>

              <div className="flex items-center space-x-4">
                {[
                  { icon: Github, href: "https://github.com/emanmukhtar" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/eman-mukhtar-89b963310/" },
                  { icon: Mail, href: "mailto:emanmukhtar5@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-3 glass-card hover-neon rounded-full group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="p-3 hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;