const Footer = () => {
  return (
    <footer className="py-8 bg-navy text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-serif text-lg">Dr. Dania Zantout</div>
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
            >
              About
            </a>
            <a
              href="#research"
              className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
            >
              Research
            </a>
            <a
              href="#contact"
              className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
