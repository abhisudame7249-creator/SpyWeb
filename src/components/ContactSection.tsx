import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative cyber-grid-bg">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--hero-gradient)" }} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-display tracking-[0.3em] text-primary uppercase">Reach Out</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">Contact Us</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {[
              { name: "name" as const, label: "Name", type: "text" },
              { name: "email" as const, label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-xs font-display tracking-widest text-muted-foreground uppercase mb-2 block">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                  placeholder={`Your ${field.label.toLowerCase()}`}
                />
              </div>
            ))}
            <div>
              <label className="text-xs font-display tracking-widest text-muted-foreground uppercase mb-2 block">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm resize-none"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-primary text-primary-foreground font-display text-sm font-semibold tracking-wider glow-button transition-transform hover:scale-105"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-8"
          >
            {[
              { icon: Mail, label: "Email", value: "hello@spyweb.tech" },
              { icon: Phone, label: "Phone", value: "+1 (555) 987-6543" },
              { icon: MapPin, label: "Location", value: "Global — Remote First" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-primary" size={18} />
                </div>
                <div>
                  <span className="text-xs font-display tracking-widest text-muted-foreground uppercase">{item.label}</span>
                  <p className="text-foreground text-sm mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
