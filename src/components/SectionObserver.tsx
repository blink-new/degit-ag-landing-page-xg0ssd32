import React, { useEffect } from 'react';
import { useActiveSection } from '../lib/context';
import { SectionId } from '../lib/types';

export function SectionObserver() {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const sections = [
      SectionId.Hero,
      SectionId.About,
      SectionId.Services,
      SectionId.Team,
      SectionId.Contact,
    ];

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // 30% of the section must be visible
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [setActiveSection]);

  return null;
}