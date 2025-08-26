import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ExternalLink, Github, Play, Edit, Save, Plus, X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  category: "web" | "mobile" | "desktop" | "ai";
}

const Projects = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "Phish Sentinel",
      description: "AI-powered phishing detection tool with interactive 3D UI.",
      longDescription: "AI-powered phishing detection tool analyzing URLs with 95% measured accuracy. Developed interactive React.js frontend with custom 3D animations, loading transitions, and dynamic visual feedback systems. Implemented responsive UI design with SEO optimization and integrated machine learning models for real-time threat assessment.",
      technologies: ["Python", "Firebase", "React.js", "ML models"],
      imageUrl: "/PST.png",
      videoUrl: "/phishdemo.mp4",
      githubUrl: "#",
      category: "ai"
    },
    {
      id: "2",
      title: "Loan Approval System",
      description: "Automated loan screening system with AI model.",
      longDescription: "Automated loan screening system reducing manual review time by 80% and improving approval accuracy.",
      technologies: ["Python", "AI model", "React.js"],
      imageUrl: "/LAS.png",
      videoUrl: "/loan%20approval%20system.mp4",
      githubUrl: "#",
      category: "ai"
    },
    {
      id: "3",
      title: "OrgDon",
      description: "Prototype mobile platform for donor registration and hospital mapping.",
      longDescription: "Developed a prototype platform for donor registration and hospital mapping as part of a team project. Improved project testing efficiency by 30%.",
      technologies: [ "Vite", "React.js", "Python"],
      imageUrl: "/orgT.png",
      videoUrl: "/orgdonweb11.mp4",
      githubUrl: "#",
      category: "web"
    },
    {
      id: "4",
      title: "E-Commerce Store",
      description: "Responsive online stores with payment gateways and SEO optimization.",
      longDescription: "Delivered 3+ responsive online stores with integrated payment gateways and SEO optimization. Implemented smooth animations, interactive product galleries, and conversion-focused UI elements, increasing client sales by up to 60% through performance optimization and user experience enhancements.",
      technologies: ["React.js", "Node.js", "Firebase"],
      imageUrl: "/ECOM.png",
      videoUrl: "/ecomweb11.mp4",
      githubUrl: "#",
      category: "web"
    }
  ]);

  const newProject: Project = {
    id: "",
    title: "",
    description: "",
    longDescription: "",
    technologies: [],
    imageUrl: "",
    videoUrl: "",
    liveUrl: "",
    githubUrl: "",
    category: "web"
  };

  const categories = ["all", "web", "mobile", "desktop", "ai"];
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleEdit = (project: Project) => {
    setEditingProject({ ...project });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editingProject) {
      setProjects(prev => prev.map(p => p.id === editingProject.id ? editingProject : p));
      setIsEditing(false);
      setEditingProject(null);
    }
  };

  const handleAddNew = () => {
    const id = Date.now().toString();
    const projectToAdd = { ...newProject, id };
    setProjects(prev => [...prev, projectToAdd]);
    setEditingProject(projectToAdd);
    setIsEditing(true);
    setIsAddingNew(false);
  };

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 cyber-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Innovative solutions that push the boundaries of technology
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "glass-button bg-primary" : "glass-button"}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}

            <Button
              variant="outline"
              onClick={() => setIsAddingNew(true)}
              className="glass-button border-neon hover:border-neon-glow"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="project-card h-full overflow-hidden">
                <CardContent className="p-0">
                  {/* Thumbnail */}
                  <div className="w-full h-48 bg-gradient-electric flex items-center justify-center overflow-hidden">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-primary-foreground">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Title + Category */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="text-xs cyber-text">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Short Description */}
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {/* GitHub */}
                      <Button
  variant="outline"
  className={`glass-button w-1/2 ${
    project.title === "E-Commerce Store"
      ? "pointer-events-none opacity-50"
      : ""
  }`}
  asChild
>
  <a
    href={
      project.title === "E-Commerce Store" ? "#" : project.githubUrl || "#"
    }
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className="w-4 h-4 mr-2" />
    GitHub
  </a>
</Button>


                      {/* View Demo */}
                      {project.videoUrl && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="glass-button w-1/2">
                              <Play className="w-4 h-4 mr-2" />
                              View Demo
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl glass-card">
                            <DialogHeader>
                              <DialogTitle className="text-2xl text-gradient">
                                {project.title} – Demo (Full Screen for better experience)
                              </DialogTitle>
                            </DialogHeader>
                            <div className="w-full h-96 bg-black rounded-lg overflow-hidden">
                              <video
                                controls
                                autoPlay
                                preload="auto"
                                className="w-full h-full object-contain"
                                playsInline
                              >
                                <source src={project.videoUrl} type="video/mp4" />
                              </video>
                            </div>
                            <p className="text-muted-foreground mt-4">
                              {project.longDescription}
                            </p>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Edit Project Dialog */}
        <Dialog open={isEditing} onOpenChange={setIsEditing}>
          <DialogContent className="max-w-2xl glass-card">
            <DialogHeader>
              <DialogTitle className="text-2xl text-gradient">
                Edit Project
              </DialogTitle>
            </DialogHeader>
            {editingProject && (
              <div className="space-y-4">
                <Input
                  placeholder="Project Title"
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  className="bg-secondary border-border"
                />
                <Textarea
                  placeholder="Short Description"
                  value={editingProject.description}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  className="bg-secondary border-border"
                  rows={2}
                />
                <Textarea
                  placeholder="Detailed Description"
                  value={editingProject.longDescription}
                  onChange={(e) => setEditingProject({ ...editingProject, longDescription: e.target.value })}
                  className="bg-secondary border-border"
                  rows={4}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Live URL"
                    value={editingProject.liveUrl || ""}
                    onChange={(e) => setEditingProject({ ...editingProject, liveUrl: e.target.value })}
                    className="bg-secondary border-border"
                  />
                  <Input
                    placeholder="GitHub URL"
                    value={editingProject.githubUrl || ""}
                    onChange={(e) => setEditingProject({ ...editingProject, githubUrl: e.target.value })}
                    className="bg-secondary border-border"
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" onClick={() => setIsEditing(false)} className="glass-button">
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                  <Button onClick={handleSave} className="glass-button">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Add Project Dialog */}
        <Dialog open={isAddingNew} onOpenChange={setIsAddingNew}>
          <DialogContent className="max-w-md glass-card">
            <DialogHeader>
              <DialogTitle className="text-2xl text-gradient">
                Add New Project
              </DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground mb-4">
              Create a new project entry to showcase your work.
            </p>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setIsAddingNew(false)} className="glass-button">
                Cancel
              </Button>
              <Button onClick={handleAddNew} className="glass-button">
                <Plus className="w-4 h-4 mr-2" />
                Create Project
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
