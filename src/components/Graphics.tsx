import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Eye, Edit, Save, Plus, X, Upload } from "lucide-react";

interface Graphic {
  id: string;
  title: string;
  description: string;
  category: "logo" | "illustration" | "branding" | "poster" | "web-design";
  imageUrl?: string;
  images?: string[];
  tags: string[];
  year: string;
  features?: string[];
}

// Swipeable gallery for multi-image graphics
const SwipeableImages = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-64 flex items-center justify-center bg-secondary rounded-lg overflow-hidden mb-4">
        <img src={images[index]} alt={`Mockup ${index + 1}`} className="object-contain w-full h-full" />
      </div>
      <div className="flex gap-2">
        {images.map((img, i) => (
          <Button
            key={img}
            size="sm"
            variant={i === index ? "default" : "outline"}
            onClick={() => setIndex(i)}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

// Example graphics data (fill in with your actual images and folders)
const graphics = [
  {
    id: "sem-technology",
    title: "S.E.M TECHNOLOGY",
    description: "A logo designed for a tech company, featuring a modern and minimalistic style suitable for digital branding.",
    features: [
      "Vector-based design",
      "Scalable for print and web",
      "Modern color palette",
      "Professional branding"
    ],
    imageUrl: "/GRAPHICS/S.E.M TECHNOLOGY Logo.png",
    category: "logo",
    tags: ["Logo", "Tech", "Branding"],
    year: "2021" // updated
  },
  {
    id: "god-given-automobile",
    title: "God Given Automobile",
    description: "Logo for an automobile company, emphasizing strength and reliability.",
    features: [
      "Bold typography",
      "Automotive symbolism",
      "High contrast colors"
    ],
    imageUrl: "/GRAPHICS/God Given Automobile.png",
    category: "logo",
    tags: ["Logo", "Automobile", "Branding"],
    year: "2024" // updated
  },
  {
    id: "bonwok",
    title: "Bonwok",
    description: "Logo for Bonwok, designed for a contemporary food brand with a playful and appetizing look.",
    features: [
      "Custom typography",
      "Food-themed iconography",
      "Vibrant colors"
    ],
    imageUrl: "/GRAPHICS/Bonwok.png",
    category: "logo",
    tags: ["Logo", "Food", "Branding"],
    year: "2023" // updated
  },
  {
    id: "goldsip",
    title: "Goldsip",
    description: "Logo for Goldsip, a premium beverage brand, emphasizing luxury and elegance.",
    features: [
      "Elegant gold accents",
      "Premium brand identity",
      "Minimalist design"
    ],
    imageUrl: "/GRAPHICS/Goldsip.png",
    category: "logo",
    tags: ["Logo", "Beverage", "Luxury"],
    year: "2023" // updated
  },
  {
    id: "minimist",
    title: "Minimist",
    description: "Logo for Minimist, a minimalist lifestyle brand, focusing on simplicity and clarity.",
    features: [
      "Minimalist design",
      "Monochrome palette",
      "Modern aesthetics"
    ],
    imageUrl: "/GRAPHICS/MINIMIST Perfume Logo.png",
    category: "logo",
    tags: ["Logo", "Minimalism", "Lifestyle"],
    year: "2024" // updated
  },
  {
    id: "g15",
    title: "Earth's Crust",
    description: "Logo for Earth's Crust, a UK-based brand selling shilajit. Designed for a client to reflect purity and earth-derived wellness.",
    features: [
      "Earthy tones",
      "Natural elements",
      "Brand identity for wellness products"
    ],
    imageUrl: "/GRAPHICS/g15.jpg",
    category: "logo",
    tags: ["Logo", "Wellness", "UK Client", "Shilajit"],
    year: "2022" // updated
  },
  {
    id: "desmos-network",
    title: "Desmos Network",
    description: "Logo and branding for Desmos Network, a modern tech brand focused on connectivity and innovation.",
    features: [
      "Clean geometric shapes",
      "Tech-inspired color palette",
      "Scalable vector format"
    ],
    images: [
      "/GRAPHICS/Desmos Networks/G1.png",
      "/GRAPHICS/Desmos Networks/g2.png"
    ],
    category: "logo",
    tags: ["Logo", "Tech", "Network"],
    year: "2022" // updated
  },
  {
    id: "local-kollective",
    title: "Local Kollective Signage Mockups",
    description: "Signage mockups for FastSigns clients, professionally used in 2025. Designed for impactful storefront branding.",
    features: [
      "Multiple signage variations",
      "Realistic mockup presentation",
      "Client-ready deliverables"
    ],
    images: [
      "/GRAPHICS/Local Kollective signage mockups/G5.png",
      "/GRAPHICS/Local Kollective signage mockups/G7.png",
      "/GRAPHICS/Local Kollective signage mockups/G8.png"
    ],
    category: "branding",
    tags: ["Signage", "Mockup", "Branding"],
    year: "2025"
  },
  {
    id: "sca-mockups",
    title: "SCA Signage Mockups",
    description: "Professional signage mockups for SCA, created for FastSigns clients in 2025.",
    features: [
      "High-resolution mockups",
      "Multiple design options",
      "Client presentation ready"
    ],
    images: [
      "/GRAPHICS/SCA Mockups/SCA FINAL With MAP.png",
      "/GRAPHICS/SCA Mockups/SCA M1 WITH MAP.png",
      "/GRAPHICS/SCA Mockups/SCA M2 WITH MAP.png"
    ],
    category: "branding",
    tags: ["Signage", "Mockup", "Branding"],
    year: "2025"
  },
  {
    id: "sea-pines-resort",
    title: "Sea Pines Resort Signage Mockups",
    description: "Signage mockups for Sea Pines Resort, used professionally for client presentations at FastSigns.",
    features: [
      "Elegant resort branding",
      "Multiple signage styles",
      "Professional mockup quality"
    ],
    images: [
      "/GRAPHICS/Sea Pines Resort signage mockups/g11.png",
      "/GRAPHICS/Sea Pines Resort signage mockups/g12.png",
      "/GRAPHICS/Sea Pines Resort signage mockups/g13.png"
    ],
    category: "branding",
    tags: ["Signage", "Resort", "Mockup"],
    year: "2025"
  },
  {
    id: "the-greenery-inc",
    title: "The Greenery Inc Signage Mockups",
    description: "Signage mockups for The Greenery Inc., created for FastSigns clients in 2025.",
    features: [
      "Nature-inspired design",
      "Multiple mockup views",
      "Client-ready assets"
    ],
    images: [
      "/GRAPHICS/The greenery Inc Signage Mockups/g10.png",
      "/GRAPHICS/The greenery Inc Signage Mockups/g14.png"
    ],
    category: "branding",
    tags: ["Signage", "Nature", "Mockup"],
    year: "2025"
  }
];

const Graphics = () => {
  const [selectedGraphic, setSelectedGraphic] = useState<typeof graphics[0] | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingGraphic, setEditingGraphic] = useState<Graphic | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const categories = ["all", "logo", "illustration", "branding", "poster", "web-design"];
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredGraphics = selectedCategory === "all" 
    ? graphics 
    : graphics.filter(graphic => graphic.category === selectedCategory);

  const handleEdit = (graphic: Graphic) => {
    setEditingGraphic({ ...graphic });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editingGraphic) {
      setGraphics(prev => prev.map(g => g.id === editingGraphic.id ? editingGraphic : g));
      setIsEditing(false);
      setEditingGraphic(null);
    }
  };

  const newGraphic: Graphic = {
    id: "",
    title: "",
    description: "",
    category: "logo",
    imageUrl: "",
    tags: [],
    year: new Date().getFullYear().toString()
  };

  const handleAddNew = () => {
    const id = Date.now().toString();
    const graphicToAdd = { ...newGraphic, id };
    setGraphics(prev => [...prev, graphicToAdd]);
    setEditingGraphic(graphicToAdd);
    setIsEditing(true);
    setIsAddingNew(false);
  };

  return (
    <section id="graphics" className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient cyber-text mb-2">
            Graphic Design
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Visual storytelling through innovative design and creative expression
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-transparent border border-border text-foreground hover:bg-primary/10"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => setIsAddingNew(true)}
              className="px-6 py-2 font-semibold rounded-full border-neon hover:bg-neon/10"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Graphic
            </Button>
          </div>
        </motion.div>

        {/* Graphics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredGraphics.map((graphic) => (
            <motion.div
              key={graphic.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-0">
                  <div className="relative h-60 bg-secondary flex items-center justify-center overflow-hidden">
                    {graphic.images && graphic.images.length > 0 ? (
                      <img
                        src={graphic.images[0]}
                        alt={graphic.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : graphic.imageUrl ? (
                      <img
                        src={graphic.imageUrl}
                        alt={graphic.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-4xl text-muted-foreground font-bold">
                        {graphic.title[0]}
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-background/80 text-primary font-bold px-3 py-1 text-xs">
                        {graphic.category.replace('-', ' ')}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-background/80 text-neon font-bold px-3 py-1 text-xs">
                        {graphic.year}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2 text-foreground">{graphic.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{graphic.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {graphic.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {graphic.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{graphic.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(graphic)}
                        className="border-primary"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline" className="border-neon">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl glass-card">
                          <DialogHeader>
                            <DialogTitle className="text-2xl text-gradient">
                              {graphic.title}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 flex items-center justify-center">
                              {graphic.images && graphic.images.length > 0 ? (
                                <SwipeableImages images={graphic.images} />
                              ) : graphic.imageUrl ? (
                                <img
                                  src={graphic.imageUrl}
                                  alt={graphic.title}
                                  className="w-full h-80 object-contain rounded-lg"
                                />
                              ) : (
                                <div className="text-6xl text-muted-foreground font-bold">
                                  {graphic.title[0]}
                                </div>
                              )}
                            </div>
                            <div className="flex-1 space-y-4">
                              <h4 className="font-bold text-lg">Description</h4>
                              <p className="text-muted-foreground">{graphic.description}</p>
                              <h4 className="font-bold text-lg">Category</h4>
                              <Badge variant="outline" className="text-primary">{graphic.category.replace('-', ' ')}</Badge>
                              <h4 className="font-bold text-lg">Year</h4>
                              <span className="text-muted-foreground">{graphic.year}</span>
                              <h4 className="font-bold text-lg">Tags</h4>
                              <div className="flex flex-wrap gap-2">
                                {graphic.tags.map(tag => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Edit Graphics Dialog */}
        <Dialog open={isEditing} onOpenChange={setIsEditing}>
          <DialogContent className="max-w-2xl glass-card">
            <DialogHeader>
              <DialogTitle className="text-2xl text-gradient">
                Edit Graphic
              </DialogTitle>
            </DialogHeader>
            {editingGraphic && (
              <div className="space-y-4">
                <Input
                  placeholder="Graphic Title"
                  value={editingGraphic.title}
                  onChange={(e) => setEditingGraphic({...editingGraphic, title: e.target.value})}
                  className="bg-secondary border-border"
                />
                <Textarea
                  placeholder="Description"
                  value={editingGraphic.description}
                  onChange={(e) => setEditingGraphic({...editingGraphic, description: e.target.value})}
                  className="bg-secondary border-border"
                  rows={3}
                />
                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={editingGraphic.category}
                    onChange={(e) => setEditingGraphic({...editingGraphic, category: e.target.value as any})}
                    className="px-3 py-2 bg-secondary border border-border rounded-md text-foreground"
                  >
                    <option value="logo">Logo</option>
                    <option value="illustration">Illustration</option>
                    <option value="branding">Branding</option>
                    <option value="poster">Poster</option>
                    <option value="web-design">Web Design</option>
                  </select>
                  <Input
                    placeholder="Year"
                    value={editingGraphic.year}
                    onChange={(e) => setEditingGraphic({...editingGraphic, year: e.target.value})}
                    className="bg-secondary border-border"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Upload className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Image upload functionality would go here
                  </span>
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

        {/* Add Graphic Dialog */}
        <Dialog open={isAddingNew} onOpenChange={setIsAddingNew}>
          <DialogContent className="max-w-md glass-card">
            <DialogHeader>
              <DialogTitle className="text-2xl text-gradient">
                Add New Graphic
              </DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground mb-4">
              Create a new graphic design entry for your portfolio.
            </p>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setIsAddingNew(false)} className="glass-button">
                Cancel
              </Button>
              <Button onClick={handleAddNew} className="glass-button">
                <Plus className="w-4 h-4 mr-2" />
                Create Graphic
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Graphics;