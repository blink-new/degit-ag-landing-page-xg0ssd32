import React, { useState } from 'react';
import { useLanguage } from '../lib/context';
import { SectionId } from '../lib/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const { t } = useLanguage();
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [imprintModalOpen, setImprintModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    const success = Math.random() > 0.1; // 90% success rate for demo
    
    if (success) {
      setFormSubmitted(true);
      setFormError(false);
      // Reset form after 3 seconds
      setTimeout(() => {
        setContactModalOpen(false);
        setTimeout(() => setFormSubmitted(false), 500);
      }, 3000);
    } else {
      setFormError(true);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id={SectionId.Contact} className="bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.footerContactTitle}</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[rgb(110,224,172)] mt-0.5 mr-3" />
                <span className="text-muted-foreground">{t.footerAddress}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[rgb(110,224,172)] mr-3" />
                <a 
                  href="mailto:info@degit-ag.de" 
                  className="text-muted-foreground hover:text-[rgb(110,224,172)] transition-colors"
                >
                  {t.footerEmail}
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[rgb(110,224,172)] mr-3" />
                <a 
                  href="tel:+4930123456" 
                  className="text-muted-foreground hover:text-[rgb(110,224,172)] transition-colors"
                >
                  {t.footerPhone}
                </a>
              </div>
              <div className="mt-4">
                <Button 
                  onClick={() => setContactModalOpen(true)}
                  className="bg-[rgb(110,224,172)] hover:bg-[rgb(90,204,152)] text-white"
                >
                  {t.footerContactButton}
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.footerLinksTitle}</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={`#${SectionId.Hero}`} 
                  className="text-muted-foreground hover:text-[rgb(110,224,172)] transition-colors"
                >
                  {t.navHome}
                </a>
              </li>
              <li>
                <a 
                  href={`#${SectionId.About}`} 
                  className="text-muted-foreground hover:text-[rgb(110,224,172)] transition-colors"
                >
                  {t.navAbout}
                </a>
              </li>
              <li>
                <a 
                  href={`#${SectionId.Services}`} 
                  className="text-muted-foreground hover:text-[rgb(110,224,172)] transition-colors"
                >
                  {t.navServices}
                </a>
              </li>
              <li>
                <a 
                  href={`#${SectionId.Team}`} 
                  className="text-muted-foreground hover:text-[rgb(110,224,172)] transition-colors"
                >
                  {t.navTeam}
                </a>
              </li>
              <li>
                <a 
                  href={`#${SectionId.Contact}`} 
                  className="text-muted-foreground hover:text-[rgb(110,224,172)] transition-colors"
                >
                  {t.navContact}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.footerLegalTitle}</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setImprintModalOpen(true)}
                  className="text-muted-foreground hover:text-[rgb(110,224,172)] transition-colors"
                >
                  {t.footerImprint}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setPrivacyModalOpen(true)}
                  className="text-muted-foreground hover:text-[rgb(110,224,172)] transition-colors"
                >
                  {t.footerPrivacy}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} DEGIT AG. All rights reserved.</p>
        </div>
      </div>

      {/* Contact Form Modal */}
      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t.contactFormTitle}</DialogTitle>
          </DialogHeader>
          {formSubmitted ? (
            <div className="py-6 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[rgb(110,224,172)]/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[rgb(110,224,172)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-medium">{t.contactFormSuccess}</p>
              </motion.div>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  {t.contactFormName}
                </label>
                <Input id="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  {t.contactFormEmail}
                </label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  {t.contactFormMessage}
                </label>
                <Textarea id="message" rows={4} required />
              </div>
              {formError && (
                <div className="text-destructive text-sm">
                  {t.contactFormError}
                </div>
              )}
              <div className="flex justify-end">
                <Button 
                  type="submit"
                  className="bg-[rgb(110,224,172)] hover:bg-[rgb(90,204,152)] text-white"
                >
                  {t.contactFormSubmit}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Imprint Modal */}
      <Dialog open={imprintModalOpen} onOpenChange={setImprintModalOpen}>
        <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t.imprintTitle}</DialogTitle>
          </DialogHeader>
          <div 
            className="prose dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground max-w-none"
            dangerouslySetInnerHTML={{ __html: t.imprintContent }}
          />
          <div className="flex justify-end">
            <Button 
              onClick={() => setImprintModalOpen(false)}
              variant="outline"
            >
              {t.close}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Privacy Modal */}
      <Dialog open={privacyModalOpen} onOpenChange={setPrivacyModalOpen}>
        <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t.privacyTitle}</DialogTitle>
          </DialogHeader>
          <div 
            className="prose dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground max-w-none"
            dangerouslySetInnerHTML={{ __html: t.privacyContent }}
          />
          <div className="flex justify-end">
            <Button 
              onClick={() => setPrivacyModalOpen(false)}
              variant="outline"
            >
              {t.close}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}