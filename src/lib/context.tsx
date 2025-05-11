import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from './types';
import { Translations, de, en, useTranslations } from './i18n';

// Theme Context
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Language Context
type LanguageContextType = {
  language: 'en' | 'de';
  setLanguage: (lang: 'en' | 'de') => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Active Section Context
type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }
  return context;
};

// Combined Provider
interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // Theme state
  const [theme, setThemeState] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    return savedTheme || 'system';
  });

  // Language state
  const [language, setLanguageState] = useState<'en' | 'de'>(() => {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'de' | null;
    if (savedLanguage) return savedLanguage;
    
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'de' ? 'de' : 'en';
  });

  // Active section state
  const [activeSection, setActiveSection] = useState('hero');

  // Get translations based on language
  const t = useTranslations(language);

  // Set theme in localStorage and apply to document
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Set language in localStorage
  const setLanguage = (newLanguage: 'en' | 'de') => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Apply theme to document
  useEffect(() => {
    const root = window.document.documentElement;
    
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    if (currentTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        const root = window.document.documentElement;
        if (mediaQuery.matches) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage, t }}>
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
          {children}
        </ActiveSectionContext.Provider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};