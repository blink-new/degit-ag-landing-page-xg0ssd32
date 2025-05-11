import React from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../lib/context';
import { cn } from '../lib/utils';

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className={cn("font-medium transition-colors", className)}
      aria-label={language === 'en' ? 'Switch to German' : 'Switch to English'}
    >
      {/* Show the language you can switch to, not the current one */}
      {language === 'en' ? 'DE' : 'EN'}
    </Button>
  );
}