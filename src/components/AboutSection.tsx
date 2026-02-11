import { motion } from "framer-motion";
import { Target, Eye, Zap } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 relative cyber-grid-bg">
    <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--hero-gradient)" }} />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-display tracking-[0.3em] text-primary uppercase">Who We Are</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">About SPYWEB</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            SPYWEB is a forward-thinking digital technology company specializing in
            secure, scalable web solutions. We combine creativity with cutting-edge
            technology to deliver products that empower businesses worldwide.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From startups to enterprise-level organizations, we partner with
            ambitious teams to build digital experiences that are secure, smart,
            and built to last.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-6"
        >
          {[
            { icon: Target, title: "Our Mission", text: "To deliver innovative, secure digital solutions that accelerate business growth and digital transformation." },
            { icon: Eye, title: "Our Vision", text: "To be the global leader in trusted digital technology, setting new standards for security and innovation." },
            { icon: Zap, title: "Our Values", text: "Innovation, integrity, security, and a relentless commitment to client success drive everything we do." },
          ].map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 p-4 rounded-lg border border-border bg-card/50 hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
