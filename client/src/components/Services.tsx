import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Cloud, Brain, Cpu } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored software solutions to meet your unique business needs"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps with user-centric design"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive and dynamic web applications for your business"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure and migration"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "AI-driven solutions for data analysis and automation"
  },
  {
    icon: Cpu,
    title: "IoT Development",
    description: "Internet of Things solutions for smart devices and systems"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
