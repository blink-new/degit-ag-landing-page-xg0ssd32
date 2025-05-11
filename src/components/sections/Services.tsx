import React, { useState } from 'react';
import { useLanguage } from '../../lib/context';
import { SectionId } from '../../lib/types';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Card, CardContent } from '../ui/card';

export function Services() {
  const { t } = useLanguage();
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      titleKey: 'service1Title',
      teaserKey: 'service1Teaser',
      descriptionKey: 'service1Description',
      imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      titleKey: 'service2Title',
      teaserKey: 'service2Teaser',
      descriptionKey: 'service2Description',
      imageSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      titleKey: 'service3Title',
      teaserKey: 'service3Teaser',
      descriptionKey: 'service3Description',
      imageSrc: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      titleKey: 'service4Title',
      teaserKey: 'service4Teaser',
      descriptionKey: 'service4Description',
      imageSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      titleKey: 'service5Title',
      teaserKey: 'service5Teaser',
      descriptionKey: 'service5Description',
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      titleKey: 'service6Title',
      teaserKey: 'service6Teaser',
      descriptionKey: 'service6Description',
      imageSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
  ];

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id={SectionId.Services}
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t.servicesTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t.servicesSubtitle}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="h-full"
            >
              <Card className={cn(
                "h-full overflow-hidden transition-all duration-300 border",
                expandedService === service.id 
                  ? "border-[rgb(110,224,172)]" 
                  : "hover:border-[rgb(110,224,172)] hover:shadow-md"
              )}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.imageSrc}
                    alt={t[service.titleKey as keyof typeof t]}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {t[service.titleKey as keyof typeof t]}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t[service.teaserKey as keyof typeof t]}
                  </p>
                  
                  {/* Accordion content */}
                  <div className="mt-2">
                    <button
                      onClick={() => toggleService(service.id)}
                      className="flex items-center text-sm font-medium text-[rgb(110,224,172)] hover:text-[rgb(90,204,152)] transition-colors"
                    >
                      {expandedService === service.id ? (
                        <>
                          <span>{t.readLess}</span>
                          <ChevronUp className="ml-1 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          <span>{t.readMore}</span>
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </button>
                    
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        expandedService === service.id ? "max-h-96 mt-4" : "max-h-0"
                      )}
                    >
                      <p className="text-muted-foreground">
                        {t[service.descriptionKey as keyof typeof t]}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}