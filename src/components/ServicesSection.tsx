import { motion } from "framer-motion";
import { Globe, Palette, ShoppingCart, Smartphone, ShieldCheck, Cloud } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "High-performance, responsive websites built with modern frameworks and best practices." },
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive, beautiful interfaces designed to engage users and drive conversions." },
  { icon: ShoppingCart, title: "E-Commerce Solutions", desc: "Scalable online stores with secure payment integration and seamless shopping experiences." },
  { icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile apps crafted for performance and usability." },
  { icon: ShieldCheck, title: "Cyber Security", desc: "Comprehensive security audits, penetration testing, and protection strategies." },
  { icon: Cloud, title: "Cloud & Digital Transformation", desc: "Cloud migration, DevOps, and digital strategies to modernize your business." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-display tracking-[0.3em] text-primary uppercase">What We Do</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">Our Services</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 neon-border-hover cursor-default"
          >
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
