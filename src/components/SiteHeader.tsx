import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Exhibitions", path: "/exhibitions" },
  { label: "Event & Press", path: "/event-press" },
  { label: "Contact", path: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-[0_1px_0_hsl(var(--border))]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 h-16 md:h-20">
        <Link
          to="/"
          className="font-serif text-base md:text-lg font-light tracking-[0.18em] text-foreground hover:opacity-60 transition-opacity duration-500"
        >
          John Han-Chang Lin
        </Link>

        {/* Desktop nav — right-aligned, spaced */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative font-sans text-[10px] tracking-[0.22em] uppercase transition-colors duration-500 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:bg-foreground after:transition-all after:duration-500 ${
                location.pathname === item.path
                  ? "text-foreground after:w-full"
                  : "text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav — fullscreen overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-xl animate-fade-in z-40">
          <nav className="flex flex-col items-center justify-center h-full gap-10 -mt-16">
            {navItems.map((item, i) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`font-serif text-2xl font-light tracking-[0.15em] transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
