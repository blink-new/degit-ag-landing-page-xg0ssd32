import React, { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage, useActiveSection } from '../lib/context';
import { SectionId } from '../lib/types';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const { t } = useLanguage();
  const { activeSection } = useActiveSection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { label: t.navHome, href: `#${SectionId.Hero}`, section: SectionId.Hero },
    { label: t.navAbout, href: `#${SectionId.About}`, section: SectionId.About },
    { label: t.navServices, href: `#${SectionId.Services}`, section: SectionId.Services },
    { label: t.navTeam, href: `#${SectionId.Team}`, section: SectionId.Team },
    { label: t.navContact, href: `#${SectionId.Contact}`, section: SectionId.Contact },
  ];

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href={`#${SectionId.Hero}`} className="text-xl font-bold text-primary">
          DEGIT AG
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.section}>
                <a 
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-2",
                    activeSection === item.section 
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary" 
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.section}>
                  <a 
                    href={item.href}
                    className={cn(
                      "block py-2 text-sm font-medium transition-colors hover:text-primary",
                      activeSection === item.section ? "text-primary" : "text-muted-foreground"
                    )}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}