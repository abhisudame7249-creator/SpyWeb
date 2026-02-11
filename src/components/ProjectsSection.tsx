import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "SecureVault Platform", category: "Cyber Security", desc: "Enterprise-grade security dashboard with real-time threat monitoring and AI-powered analysis.", color: "from-primary/20 to-accent/10" },
  { title: "ShopSphere E-Commerce", category: "E-Commerce", desc: "Full-stack e-commerce platform with advanced payment processing and inventory management.", color: "from-accent/20 to-primary/10" },
  { title: "CloudSync Dashboard", category: "Cloud Solutions", desc: "Multi-cloud management interface for monitoring, deploying, and scaling infrastructure.", color: "from-primary/15 to-secondary" },
  { title: "FinTrack Mobile App", category: "App Development", desc: "Cross-platform financial tracking app with biometric authentication and real-time analytics.", color: "from-accent/15 to-primary/10" },
  { title: "MedConnect Portal", category: "Web Development", desc: "Healthcare platform connecting patients with providers through secure telemedicine solutions.", color: "from-primary/20 to-accent/15" },
  { title: "DataFlow Analytics", category: "Digital Transformation", desc: "Business intelligence platform with custom dashboards, reporting, and predictive analytics.", color: "from-secondary to-primary/15" },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-display tracking-[0.3em] text-primary uppercase">Our Work</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">Featured Projects</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 neon-border-hover"
          >
            <div className={`h-40 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 cyber-grid-bg opacity-30" />
              <span className="font-display text-primary/60 text-5xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">
                {p.title.charAt(0)}
              </span>
            </div>
            <div className="p-5">
              <span className="text-[10px] font-display tracking-widest text-primary uppercase">{p.category}</span>
              <h3 className="font-display text-base font-semibold text-foreground mt-1 mb-2 flex items-center gap-2">
                {p.title}
                <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
