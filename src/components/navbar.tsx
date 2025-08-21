import React, { useEffect, useState } from "react";
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
        <nav className="bg-white dark:bg-secondary shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#home" className="heading-font text-2xl font-bold text-gray-800 dark:text-foreground">
                        Shekinah
                    </a>
                </div>
                {/*Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#home" className="nav-link text-gray-700 dark:text-foreground hover:text-amber-600">Home</a>
                    <a href="#about" className="nav-link text-gray-700 dark:text-foreground hover:text-amber-600">About</a>
                    <a href="#events" className="nav-link text-gray-700 dark:text-foreground hover:text-amber-600">Events</a>
                    <a href="#sermons" className="nav-link text-gray-700 dark:text-foreground hover:text-amber-600">Sermons</a>
                    <a href="#contact" className="nav-link text-gray-700 dark:text-foreground hover:text-amber-600">Contact</a>
                    <button aria-label="Toggle theme" onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-muted transition">
                        {isDark ? <Sun size={18} className="text-gray-700 dark:text-foreground"/> : <Moon size={18} className="text-gray-700"/>}
                    </button>
                    <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        Join Us
                    </a>
                </div>
                {/*Mobile Menu Button*/}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-gray-700 dark:text-foreground focus:outline-none"
                    aria-label="Toggle mobile menu"
                >
                    <Menu size={28} className="text-gray-700" />

                </button>

            </div>
            {/* Mobile Navigation*/}
            {isMobileMenuOpen && (
                <div className="bg-white dark:bg-secondary px-4 py-2 flex flex-col space-y-3 md:hidden">
                    <a href="#home" className="block py-2 text-gray-700 dark:text-foreground hover:text-amber-600" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                    <a href="#about" className="block py-2 text-gray-700 dark:text-foreground hover:text-amber-600" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                    <a href="#events" className="block py-2 text-gray-700 dark:text-foreground hover:text-amber-600" onClick={() => setIsMobileMenuOpen(false)}>Events</a>
                    <a href="#sermons" className="block py-2 text-gray-700 dark:text-foreground hover:text-amber-600" onClick={() => setIsMobileMenuOpen(false)}>Sermons</a>
                    <a href="#contact" className="block py-2 text-gray-700 dark:text-foreground hover:text-amber-600" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                    <div className="flex items-center justify-between pt-2">
                        <button aria-label="Toggle theme" onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-muted transition">
                            {isDark ? <Sun size={18} className="text-gray-700 dark:text-foreground"/> : <Moon size={18} className="text-gray-700"/>}
                        </button>
                        <a href="#contact" className="text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                            Join Us
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;