import logo from "@/assets/spyweb-logo.png";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="grid sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="SPYWEB" className="h-8 w-8 rounded-full" />
            <span className="font-display text-lg font-bold text-primary">SPYWEB</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Secure, smart digital solutions for the modern world.
          </p>
        </div>

        <div>
          <h4 className="font-display text-xs tracking-widest text-foreground uppercase mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "Services", "About", "Projects", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs tracking-widest text-foreground uppercase mb-4">Services</h4>
          <ul className="space-y-2">
            {["Web Development", "UI/UX Design", "Cyber Security", "Cloud Solutions"].map((s) => (
              <li key={s} className="text-sm text-muted-foreground">{s}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} SPYWEB. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
