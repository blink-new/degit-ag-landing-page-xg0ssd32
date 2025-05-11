import React from 'react';
import { useLanguage } from '../../lib/context';
import { SectionId } from '../../lib/types';
import { motion } from 'framer-motion';
import { Award, Lightbulb, CheckCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

export function About() {
  const { t } = useLanguage();

  const aboutPoints = [
    {
      id: 1,
      titleKey: 'aboutPoint1Title',
      textKey: 'aboutPoint1Text',
      icon: <Award className="h-10 w-10 text-[rgb(110,224,172)]" />,
    },
    {
      id: 2,
      titleKey: 'aboutPoint2Title',
      textKey: 'aboutPoint2Text',
      icon: <Lightbulb className="h-10 w-10 text-[rgb(110,224,172)]" />,
    },
    {
      id: 3,
      titleKey: 'aboutPoint3Title',
      textKey: 'aboutPoint3Text',
      icon: <CheckCircle className="h-10 w-10 text-[rgb(110,224,172)]" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id={SectionId.About}
      className="py-20 bg-background"
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
            {t.aboutTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t.aboutSubtitle}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {aboutPoints.map((point, index) => (
            <motion.div
              key={point.id}
              variants={itemVariants}
              className={cn(
                "bg-card p-8 rounded-lg shadow-sm border border-border transition-all duration-300",
                "hover:shadow-md hover:border-[rgb(110,224,172)] hover:translate-y-[-5px]"
              )}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary/5">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t[point.titleKey as keyof typeof t]}
                </h3>
                <p className="text-muted-foreground">
                  {t[point.textKey as keyof typeof t]}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}