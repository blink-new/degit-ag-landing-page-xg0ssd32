import React, { useState } from 'react';
import { useLanguage } from '../../lib/context';
import { SectionId } from '../../lib/types';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Star, Twitter, Github, Linkedin } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Card, CardContent } from '../ui/card';

// Custom social icons
const MastodonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.6 8.38c0-4.28-2.8-5.53-2.8-5.53-1.42-.64-3.87-.9-6.4-.93h-.06c-2.54.03-4.99.29-6.4.93 0 0-2.8 1.25-2.8 5.53 0 .97-.02 2.14.15 3.38.3 2.23 2.27 4.2 4.9 4.5 1.89.22 3.5-.46 3.5-.46l-.07-1.53s-1.6.51-3.4.45c-1.8-.07-3.7-.19-3.98-2.39a4.3 4.3 0 0 1-.04-.61s1.76.43 4 .53c1.37.06 2.66-.08 3.96-.26 2.5-.34 4.68-2.1 4.95-3.71.43-2.5.4-6.1.4-6.1z" />
    <path d="M7.78 9.75h1.56v4.3a4.5 4.5 0 0 1-.55 2.23c-.36.52-.89.8-1.52.8-.63 0-1.16-.28-1.53-.8a4.5 4.5 0 0 1-.54-2.23V9.75h1.56v4.3c0 .47.07.83.2 1.07.13.24.32.37.57.37.25 0 .44-.13.57-.37.13-.24.2-.6.2-1.07v-4.3z" />
    <path d="M12.92 14.05c0 .47.07.83.2 1.07.14.24.35.37.63.37.5 0 .76-.38.76-1.13v-4.6h1.56v4.6c0 .7-.17 1.25-.5 1.65-.36.4-.87.6-1.53.6-.67 0-1.17-.2-1.5-.6-.33-.4-.5-.95-.5-1.65v-4.6h1.56v4.6z" />
  </svg>
);

const BlueSkyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const ThreadsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
    <path d="M12 6v12" />
    <path d="M6 12h12" />
  </svg>
);

const XingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2l-6 10 4 10h-4l-4-10 6-10z" />
    <path d="M6 8l2 4-3 4h3l3-4-2-4z" />
  </svg>
);

export function Team() {
  const { t } = useLanguage();
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      nameKey: 'teamMember1Name',
      positionKey: 'teamMember1Position',
      descriptionKey: 'teamMember1Description',
      bioKey: 'teamMember1Bio',
      imageSrc: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      skills: [
        { name: 'Leadership', rating: 5 },
        { name: 'Strategy', rating: 5 },
        { name: 'Communication', rating: 4 },
      ],
      socialLinks: [
        { platform: 'twitter', url: 'https://twitter.com' },
        { platform: 'linkedin', url: 'https://linkedin.com' },
      ],
    },
    {
      id: 2,
      nameKey: 'teamMember2Name',
      positionKey: 'teamMember2Position',
      descriptionKey: 'teamMember2Description',
      bioKey: 'teamMember2Bio',
      imageSrc: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      skills: [
        { name: 'Cloud Architecture', rating: 5 },
        { name: 'AI', rating: 4 },
        { name: 'System Design', rating: 5 },
      ],
      socialLinks: [
        { platform: 'github', url: 'https://github.com' },
        { platform: 'linkedin', url: 'https://linkedin.com' },
      ],
    },
    {
      id: 3,
      nameKey: 'teamMember3Name',
      positionKey: 'teamMember3Position',
      descriptionKey: 'teamMember3Description',
      bioKey: 'teamMember3Bio',
      imageSrc: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      skills: [
        { name: 'Consulting', rating: 5 },
        { name: 'Project Management', rating: 4 },
        { name: 'Business Analysis', rating: 4 },
      ],
      socialLinks: [
        { platform: 'linkedin', url: 'https://linkedin.com' },
        { platform: 'xing', url: 'https://xing.com' },
      ],
    },
    {
      id: 4,
      nameKey: 'teamMember4Name',
      positionKey: 'teamMember4Position',
      descriptionKey: 'teamMember4Description',
      bioKey: 'teamMember4Bio',
      imageSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      skills: [
        { name: 'Frontend', rating: 5 },
        { name: 'Backend', rating: 4 },
        { name: 'DevOps', rating: 3 },
      ],
      socialLinks: [
        { platform: 'github', url: 'https://github.com' },
        { platform: 'twitter', url: 'https://twitter.com' },
      ],
    },
    {
      id: 5,
      nameKey: 'teamMember5Name',
      positionKey: 'teamMember5Position',
      descriptionKey: 'teamMember5Description',
      bioKey: 'teamMember5Bio',
      imageSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      skills: [
        { name: 'UI Design', rating: 5 },
        { name: 'UX Research', rating: 4 },
        { name: 'Prototyping', rating: 5 },
      ],
      socialLinks: [
        { platform: 'twitter', url: 'https://twitter.com' },
        { platform: 'linkedin', url: 'https://linkedin.com' },
      ],
    },
    {
      id: 6,
      nameKey: 'teamMember6Name',
      positionKey: 'teamMember6Position',
      descriptionKey: 'teamMember6Description',
      bioKey: 'teamMember6Bio',
      imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      skills: [
        { name: 'Machine Learning', rating: 5 },
        { name: 'Data Visualization', rating: 4 },
        { name: 'Statistics', rating: 5 },
      ],
      socialLinks: [
        { platform: 'github', url: 'https://github.com' },
        { platform: 'linkedin', url: 'https://linkedin.com' },
      ],
    },
    {
      id: 7,
      nameKey: 'teamMember7Name',
      positionKey: 'teamMember7Position',
      descriptionKey: 'teamMember7Description',
      bioKey: 'teamMember7Bio',
      imageSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      skills: [
        { name: 'Project Management', rating: 5 },
        { name: 'Risk Management', rating: 4 },
        { name: 'Team Leadership', rating: 4 },
      ],
      socialLinks: [
        { platform: 'linkedin', url: 'https://linkedin.com' },
        { platform: 'xing', url: 'https://xing.com' },
      ],
    },
    {
      id: 8,
      nameKey: 'teamMember8Name',
      positionKey: 'teamMember8Position',
      descriptionKey: 'teamMember8Description',
      bioKey: 'teamMember8Bio',
      imageSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      skills: [
        { name: 'Cybersecurity', rating: 5 },
        { name: 'Penetration Testing', rating: 4 },
        { name: 'Security Architecture', rating: 5 },
      ],
      socialLinks: [
        { platform: 'github', url: 'https://github.com' },
        { platform: 'linkedin', url: 'https://linkedin.com' },
      ],
    },
    {
      id: 9,
      nameKey: 'teamMember9Name',
      positionKey: 'teamMember9Position',
      descriptionKey: 'teamMember9Description',
      bioKey: 'teamMember9Bio',
      imageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      skills: [
        { name: 'Business Analysis', rating: 5 },
        { name: 'Requirements Gathering', rating: 4 },
        { name: 'Process Modeling', rating: 4 },
      ],
      socialLinks: [
        { platform: 'linkedin', url: 'https://linkedin.com' },
        { platform: 'xing', url: 'https://xing.com' },
      ],
    },
  ];

  const toggleMember = (id: number) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'mastodon':
        return <MastodonIcon />;
      case 'bluesky':
        return <BlueSkyIcon />;
      case 'threads':
        return <ThreadsIcon />;
      case 'xing':
        return <XingIcon />;
      default:
        return null;
    }
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
      id={SectionId.Team}
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
            {t.teamTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t.teamSubtitle}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="h-full"
            >
              <Card className={cn(
                "h-full overflow-hidden transition-all duration-300 border",
                expandedMember === member.id 
                  ? "border-[rgb(110,224,172)]" 
                  : "hover:border-[rgb(110,224,172)] hover:shadow-md"
              )}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.imageSrc}
                    alt={t[member.nameKey as keyof typeof t]}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">
                    {t[member.nameKey as keyof typeof t]}
                  </h3>
                  <p className="text-[rgb(110,224,172)] font-medium mb-3">
                    {t[member.positionKey as keyof typeof t]}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {t[member.descriptionKey as keyof typeof t]}
                  </p>
                  
                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">{t.skillsLabel}:</h4>
                    <div className="space-y-2">
                      {member.skills.map((skill, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{skill.name}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  "h-4 w-4",
                                  i < skill.rating 
                                    ? "text-[rgb(110,224,172)] fill-[rgb(110,224,172)]" 
                                    : "text-muted-foreground/30"
                                )}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Accordion content */}
                  <div className="mt-2">
                    <button
                      onClick={() => toggleMember(member.id)}
                      className="flex items-center text-sm font-medium text-[rgb(110,224,172)] hover:text-[rgb(90,204,152)] transition-colors"
                    >
                      {expandedMember === member.id ? (
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
                        expandedMember === member.id ? "max-h-96 mt-4" : "max-h-0"
                      )}
                    >
                      <p className="text-muted-foreground mb-4">
                        {t[member.bioKey as keyof typeof t]}
                      </p>
                      
                      {/* Social links */}
                      {member.socialLinks && member.socialLinks.length > 0 && (
                        <div className="flex space-x-3 mt-4">
                          {member.socialLinks.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-[rgb(110,224,172)] transition-colors"
                              aria-label={link.platform}
                            >
                              {getSocialIcon(link.platform)}
                            </a>
                          ))}
                        </div>
                      )}
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