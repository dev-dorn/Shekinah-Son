import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { Menu, Moon, Sun } from "lucide-react";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldDark = stored ? stored === 'dark' : prefersDark;
        setIsDark(shouldDark);
        document.documentElement.classList.toggle('dark', shouldDark);
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle('dark', next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
    };

    return (
        <nav className="sticky top-0 z-50 nav-glow">
            <motion.div className="brand-gradient/10 bg-white/70 dark:glass-dark glass backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="#home" className="heading-font text-2xl font-bold">
                            <span className="brand-text-gradient">Shekinah</span>
                        </a>
                    </div>
                    {/*Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#home" className="nav-link text-gray-800/90 dark:text-foreground hover:text-amber-500">Home</a>
                        <a href="#about" className="nav-link text-gray-800/90 dark:text-foreground hover:text-amber-500">About</a>
                        <a href="#events" className="nav-link text-gray-800/90 dark:text-foreground hover:text-amber-500">Events</a>
                        <a href="#sermons" className="nav-link text-gray-800/90 dark:text-foreground hover:text-amber-500">Sermons</a>
                        <a href="#contact" className="nav-link text-gray-800/90 dark:text-foreground hover:text-amber-500">Contact</a>
                        <button aria-label="Toggle theme" onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-muted transition">
                            {isDark ? <Sun size={18} className="text-gray-800 dark:text-foreground"/> : <Moon size={18} className="text-gray-800"/>}
                        </button>
                        <a href="#contact" className="btn-primary-gradient text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                            Join Us
                        </a>
                    </div>
                    {/*Mobile Menu Button*/}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-gray-800 dark:text-foreground focus:outline-none"
                        aria-label="Toggle mobile menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </motion.div>
            {/* Mobile Navigation*/}
            {isMobileMenuOpen && (
                <div className="bg-white/80 dark:glass-dark glass px-4 py-3 flex flex-col space-y-3 md:hidden">
                    <a href="#home" className="block py-2 text-gray-800 dark:text-foreground hover:text-amber-600" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                    <a href="#about" className="block py-2 text-gray-800 dark:text-foreground hover:text-amber-600" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                    <a href="#events" className="block py-2 text-gray-800 dark:text-foreground hover:text-amber-600" onClick={() => setIsMobileMenuOpen(false)}>Events</a>
                    <a href="#sermons" className="block py-2 text-gray-800 dark:text-foreground hover:text-amber-600" onClick={() => setIsMobileMenuOpen(false)}>Sermons</a>
                    <a href="#contact" className="block py-2 text-gray-800 dark:text-foreground hover:text-amber-600" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                    <div className="flex items-center justify-between pt-2">
                        <button aria-label="Toggle theme" onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-muted transition">
                            {isDark ? <Sun size={18} className="text-gray-800 dark:text-foreground"/> : <Moon size={18} className="text-gray-800"/>}
                        </button>
                        <a href="#contact" className="text-sm btn-primary-gradient text-white py-2 px-4 rounded-full transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                            Join Us
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;