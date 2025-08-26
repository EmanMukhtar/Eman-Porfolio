import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-cosmic">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-9xl md:text-[12rem] font-bold text-gradient cyber-text mb-4">
              404
            </h1>
            <div className="w-32 h-1 bg-gradient-electric mx-auto rounded-full animate-pulse-glow" />
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-6 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Page Not Found
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Oops! The page you're looking for has vanished into the digital void. 
              It might have been moved, deleted, or you may have mistyped the URL.
            </p>
            <div className="glass-card p-4 rounded-lg inline-block">
              <code className="text-primary cyber-text">
                {location.pathname}
              </code>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              asChild
              size="lg"
              className="group"
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Return Home
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.history.back()}
              className="group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Go Back
            </Button>
          </motion.div>

          {/* Fun Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="glass-card p-6 rounded-xl inline-block">
              <p className="text-muted-foreground text-sm mb-2">
                Apologies for the inconvenience. Let's get you back on track! 
              </p>
              <div className="flex justify-center gap-2">
                {["🚀", "💻", "⚡", "🎨"].map((emoji, index) => (
                  <motion.span
                    key={index}
                    className="text-2xl"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;
