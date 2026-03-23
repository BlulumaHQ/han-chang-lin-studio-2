import { useState } from "react";
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
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md transition-colors duration-500">
      <div className="flex items-center justify-between px-8 md:px-20 py-5">
        <Link
          to="/"
          className="font-serif text-lg md:text-xl font-light tracking-[0.15em] text-foreground transition-colors duration-300"
        >
          John Han-Chang Lin
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-sans text-[10px] tracking-[0.25em] uppercase transition-colors duration-500 ${
                location.pathname === item.path
                  ? "text-foreground"
                  : "text-muted-foreground/70 hover:text-foreground"
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
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 animate-fade-in">
          <div className="flex flex-col px-8 py-8 gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`font-sans text-xs tracking-[0.25em] uppercase ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
