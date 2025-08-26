import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Edit, Save, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const About = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [aboutText, setAboutText] = useState(
    "Hello! My name is Eman Mukhtar and I am a Frontend Developer who codes with precision, a Graphic Designer who creates with flair, and a Full-Stack Problem Solver who’s explored AI-powered solutions from concept to deployment. Whether it’s building responsive React.js interfaces, designing pixel-perfect visuals in Figma and Illustrator, or integrating smart backend logic. I bring creativity, performance, and innovation to every project."

  );
  const [tempText, setTempText] = useState(aboutText);

  const experiences = [
    {
      title: "Website Development Supervisor & Graphic Designer (Remote)",
      company: " FASTSIGNS®",
      period: "June 2025 - Present",
      description: "Led frontend development for the corporate website using React.js, JavaScript, and jQuery. Boosting usability by 2x and cutting delivery time by 50%. Designed custom 2D/3D animations and interactive UI components, improving client approval rates by 35%. Ensured responsive, cross-browser performance and coordinated agile workflows across global teams for 100% on-time delivery."
    },
    {
      title: "Programming Intern",
      company: " Dopment Digital", 
      period: " 07/2023 - 08/2023",
      description: "Supported 5+ client projects by developing cross-platform web apps with React.js and modern JavaScript frameworks. Improved frontend performance and API efficiency, cutting response time by 30%. Streamlined debugging and testing workflows, reducing bug resolution time by 40% and accelerating delivery timelines"
    },
    
  ];

  const achievements = [
    "50% Faster Project Delivery",
    "2x Usability Boost",
    "Expert in Modern Tech Stack",
    "10+ Projects Delivered",
  ];

  const handleSave = () => {
    setAboutText(tempText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempText(aboutText);
    setIsEditing(false);
  };

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 cyber-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-electric mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text & Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="project-card p-8">
              <CardContent className="p-0">
                
              <div className="relative">
  {/* Profile Image */}
  <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden bg-gradient-electric">
    <img
      src="/portfoliopfp.jpg"
      alt="Profile"
      className="w-full h-full object-cover rounded-full"
      onError={(e) => {
        e.currentTarget.style.display = "none";
        e.currentTarget.parentElement!.innerHTML += `<span class='text-4xl font-bold text-primary-foreground'>EM</span>`;
      }}
    />
  </div>

                  {/* Editable About Text */}
                  <div className="relative">
                    {!isEditing ? (
                      <div className="relative group">
                        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                          {aboutText}
                        </p>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity glass-button"
                          onClick={() => setIsEditing(true)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Textarea
                          value={tempText}
                          onChange={(e) => setTempText(e.target.value)}
                          className="min-h-32 bg-secondary border-border focus:border-primary"
                          rows={6}
                        />
                        <div className="flex gap-2 justify-end">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleCancel}
                            className="glass-button"
                          >
                            <X className="w-4 h-4 mr-2" />
                            Cancel
                          </Button>
                          <Button
                            size="sm"
                            onClick={handleSave}
                            className="glass-button"
                          >
                            <Save className="w-4 h-4 mr-2" />
                            Save
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                 

                  <a href="/EMCV.pdf" download className="glass-button group w-full flex items-center justify-center">
  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
  Download Resume
</a>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4 text-center hover-lift"
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="outline" className="text-primary border-primary">
                    {achievement}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gradient mb-8 cyber-text">
              Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                  className="relative"
                >
                  <Card className="project-card p-6 ml-8">
                    <CardContent className="p-0">
                      <div className="absolute -left-14 top-6 w-4 h-4 bg-gradient-electric rounded-full border-4 border-background" />
                      <div className="absolute -left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
                      
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground cyber-text">
                          {exp.period}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;