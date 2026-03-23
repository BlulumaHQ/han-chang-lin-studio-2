import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center space-y-6">
        <p className="text-[10px] text-muted-foreground/30 tracking-[0.4em] uppercase font-sans">Error</p>
        <h1 className="font-serif text-5xl md:text-7xl font-light text-foreground tracking-wide">404</h1>
        <p className="text-sm text-muted-foreground tracking-wide">Oops! Page not found</p>
        <Button variant="museum" size="lg" asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
