import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Empowering Your Digital Future
          </h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Delivering innovative and scalable software solutions that enhance growth, 
            efficiency, and competitive advantage.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
