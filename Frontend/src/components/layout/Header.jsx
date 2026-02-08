import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
    // { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Donate", path: "/donate" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Media", path: "/media" },
    { name: "Testimonials", path: "/testimonials" },
];

const Header = () => { 
const [isOpen, setIsOpen] = useState(false);
const location = useLocation();

return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
        <div className="container-custom section-padding py-4">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <Heart className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-serif font-bold text-foreground leading-tight">
                            Care Connection
                        </span>
                        <span className="text-xs text-primary font-medium tracking-wider uppercase">
                            Foundation
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.path
                                    ? "bg-accent text-accent-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:flex items-center gap-3">
                    <Button asChild variant="default" className="btn-secondary rounded-full px-6">
                        <Link to="/donate">Donate Now</Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className="w-6 h-6 text-foreground" />
                    ) : (
                        <Menu className="w-6 h-6 text-foreground" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden overflow-hidden"
                    >
                        <div className="pt-4 pb-2 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.path
                                            ? "bg-accent text-accent-foreground"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button asChild className="btn-secondary rounded-full mt-3">
                                <Link to="/donate" onClick={() => setIsOpen(false)}>
                                    Donate Now
                                </Link>
                            </Button>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    </header>
);
};

export default Header;

