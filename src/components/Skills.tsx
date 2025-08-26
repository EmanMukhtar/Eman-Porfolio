import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// 3D Icons for each category
const FrontendIcon = () => (
  <mesh rotation={[0, 0, 0]}>
    <boxGeometry args={[1.5, 1.5, 1.5]} />
    <meshStandardMaterial color="#3b82f6" wireframe={true} />
  </mesh>
);

const BackendIcon = () => (
  <mesh rotation={[0, 0, 0]}>
    <cylinderGeometry args={[0.8, 0.8, 1.5, 8]} />
    <meshStandardMaterial color="#10b981" />
  </mesh>
);

const DesignIcon = () => (
  <mesh rotation={[0, 0, 0]}>
    <octahedronGeometry args={[1]} />
    <meshStandardMaterial color="#f59e0b" />
  </mesh>
);

const DevOpsIcon = () => (
  <mesh rotation={[0, 0, 0]}>
    <torusGeometry args={[0.8, 0.3, 16, 100]} />
    <meshStandardMaterial color="#ef4444" />
  </mesh>
);

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Frontend",
      icon: FrontendIcon,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Three.js/R3F", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Javascript", level: 88 },
        { name: "HTML", level: 99 },
      ]
    },
    {
      title: "Backend",
      icon: BackendIcon,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "FireBase", level: 85 },
        { name: "C++", level: 80 },
        { name: "Java", level: 70 },
      ]
    },
    {
      title: "Design",
      icon: DesignIcon,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe Illustrator", level: 95 },
        { name: "Adobe Photoshop", level: 99 },
        { name: "UI/UX Design", level: 88 },
        { name: "Motion Graphics", level: 82 },
      ]
    },
    {
      title: "DevOps",
      icon: DevOpsIcon,
      skills: [
        { name: "Docker", level: 80 },
        { name: "AWS/Vercel", level: 85 },
        { name: "Git/GitHub", level: 92 },
        { name: "CI/CD", level: 75 },
        { name: "DynamoDB", level: 78 },
        { name: "API Gateway", level: 80 },
      ]
    }
  ];

  const tools = [
    "React", "TypeScript", "Next.js", "Three.js", "Framer Motion", 
    "Tailwind CSS", "Node.js", "Python","GitHub", "JavaScript","Android Studio",
    "C++", "Java", "HTML", "CSS",  "Bootstrap", 
    "Docker", "AWS", "Figma", "Blender", "Adobe CC","Canva","Git","S3",
    "Cloud Front", "Lambda", "Firebase", "GraphQL", "REST APIs",  "DynamoDB", 
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="min-h-screen py-20 bg-gradient-to-br from-background via-secondary to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 cyber-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="project-card h-full">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="h-20 mb-3">
                      <Canvas camera={{ position: [0, 0, 4] }}>
                        <Suspense fallback={null}>
                          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={2} />
                          <ambientLight intensity={0.5} />
                          <directionalLight position={[2, 2, 2]} intensity={1} />
                          <category.icon />
                        </Suspense>
                      </Canvas>
                    </div>
                    <h3 className="text-2xl font-bold text-gradient cyber-text">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground cyber-text">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-bar h-2 rounded-full overflow-hidden">
                          <motion.div
                            className="skill-progress h-full rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                            transition={{
                              duration: 1.5,
                              delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gradient mb-8 cyber-text">
            Technologies & Tools
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="cursor-pointer"
              >
                <Badge 
                  variant="outline" 
                  className="text-base py-2 px-4 glass-card hover-neon border-primary/30 hover:border-primary transition-all duration-300"
                >
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "AWS", label: " Cloud Certificate" },
            { number: "API", label: "Integrations" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass-card p-6 hover-lift"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-gradient cyber-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;