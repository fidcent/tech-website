import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description: "Pioneering advanced technologies to deliver exceptional solutions"
  },
  {
    title: "Customer Centricity",
    description: "Prioritizing clients needs to exceed expectations"
  },
  {
    title: "Agility",
    description: "Embracing flexibility and adaptability to respond swiftly"
  },
  {
    title: "Integrity",
    description: "Upholding the highest standards of honesty and accountability"
  },
  {
    title: "Fidelity",
    description: "Ensuring reliability and trustworthiness in every aspect of our service"
  },
  {
    title: "Synergy",
    description: "Promoting a collaborative and supportive environment for our team and clients"
  }
];

export default function About() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">About Fidcent</h2>
          <p className="text-lg text-muted-foreground">
            Founded in 2024, Fidcent is committed to revolutionizing the digital landscape
            through innovative software solutions and exceptional service delivery.
          </p>
        </motion.div>

        <ScrollArea className="h-[500px] rounded-md border p-6 bg-background">
          <div className="grid gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="rounded-full p-2 bg-primary/10">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}