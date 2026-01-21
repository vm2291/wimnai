import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [initiativesOpen, setInitiativesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  const navItems = [
    { label: "Home", href: isHomePage ? "#" : "/" },
    { label: "About", href: isHomePage ? "#about" : "/#about" },
    {
      label: "Initiatives",
      href: "#",
      submenu: [
        { label: "Women in Math + AI", href: "/women-in-math-ai" },
        { label: "Takãmul Cup", href: "/takamul-cup" },
      ],
    },
    { label: "Awards", href: isHomePage ? "#awards" : "/#awards" },
    { label: "Speeches", href: isHomePage ? "#speeches" : "/#speeches" },
    { label: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-semibold text-navy">
          Dr. Dania Zantout
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.submenu ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setInitiativesOpen(true)}
                onMouseLeave={() => setInitiativesOpen(false)}
              >
                <button className="text-sm font-medium text-muted-foreground hover:text-navy transition-colors flex items-center gap-1">
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {initiativesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background rounded-lg shadow-lg border border-border py-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-navy hover:bg-muted transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-navy transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) =>
              item.submenu ? (
                <div key={item.label} className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-navy">
                    {item.label}
                  </span>
                  <div className="pl-4 flex flex-col gap-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="text-sm text-muted-foreground hover:text-navy transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-navy transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
