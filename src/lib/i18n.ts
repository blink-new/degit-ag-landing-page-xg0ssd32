import { useEffect, useState } from 'react';

// Define the structure of our translations
export interface Translations {
  // Header
  navHome: string;
  navAbout: string;
  navServices: string;
  navTeam: string;
  navContact: string;
  
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroButtonText: string;
  
  // About
  aboutTitle: string;
  aboutSubtitle: string;
  aboutPoint1Title: string;
  aboutPoint1Text: string;
  aboutPoint2Title: string;
  aboutPoint2Text: string;
  aboutPoint3Title: string;
  aboutPoint3Text: string;
  
  // Services
  servicesTitle: string;
  servicesSubtitle: string;
  service1Title: string;
  service1Teaser: string;
  service1Description: string;
  service2Title: string;
  service2Teaser: string;
  service2Description: string;
  service3Title: string;
  service3Teaser: string;
  service3Description: string;
  service4Title: string;
  service4Teaser: string;
  service4Description: string;
  service5Title: string;
  service5Teaser: string;
  service5Description: string;
  service6Title: string;
  service6Teaser: string;
  service6Description: string;
  readMore: string;
  readLess: string;
  
  // Team
  teamTitle: string;
  teamSubtitle: string;
  skillsLabel: string;
  teamMember1Name: string;
  teamMember1Position: string;
  teamMember1Description: string;
  teamMember1Bio: string;
  teamMember2Name: string;
  teamMember2Position: string;
  teamMember2Description: string;
  teamMember2Bio: string;
  teamMember3Name: string;
  teamMember3Position: string;
  teamMember3Description: string;
  teamMember3Bio: string;
  teamMember4Name: string;
  teamMember4Position: string;
  teamMember4Description: string;
  teamMember4Bio: string;
  teamMember5Name: string;
  teamMember5Position: string;
  teamMember5Description: string;
  teamMember5Bio: string;
  teamMember6Name: string;
  teamMember6Position: string;
  teamMember6Description: string;
  teamMember6Bio: string;
  teamMember7Name: string;
  teamMember7Position: string;
  teamMember7Description: string;
  teamMember7Bio: string;
  teamMember8Name: string;
  teamMember8Position: string;
  teamMember8Description: string;
  teamMember8Bio: string;
  teamMember9Name: string;
  teamMember9Position: string;
  teamMember9Description: string;
  teamMember9Bio: string;
  
  // Footer
  footerContactTitle: string;
  footerLinksTitle: string;
  footerLegalTitle: string;
  footerAddress: string;
  footerEmail: string;
  footerPhone: string;
  footerContactButton: string;
  footerImprint: string;
  footerPrivacy: string;
  
  // Contact Form
  contactFormTitle: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormMessage: string;
  contactFormSubmit: string;
  contactFormSuccess: string;
  contactFormError: string;
  
  // Imprint Modal
  imprintTitle: string;
  imprintContent: string;
  
  // Privacy Modal
  privacyTitle: string;
  privacyContent: string;
  
  // Common
  close: string;
}

// English translations
export const en: Translations = {
  // Header
  navHome: "Home",
  navAbout: "About",
  navServices: "Services",
  navTeam: "Team",
  navContact: "Contact",
  
  // Hero
  heroTitle: "DEGIT AG",
  heroSubtitle: "Deutsche Geschäfts- und IT-Berater AG",
  heroButtonText: "Learn More",
  
  // About
  aboutTitle: "About Us",
  aboutSubtitle: "We provide innovative IT solutions for businesses of all sizes",
  aboutPoint1Title: "Experience",
  aboutPoint1Text: "With over 15 years of experience in the IT industry, we have the expertise to tackle any challenge.",
  aboutPoint2Title: "Innovation",
  aboutPoint2Text: "We stay at the forefront of technology to provide cutting-edge solutions for our clients.",
  aboutPoint3Title: "Quality",
  aboutPoint3Text: "We are committed to delivering high-quality services that exceed our clients' expectations.",
  
  // Services
  servicesTitle: "Our Services",
  servicesSubtitle: "Comprehensive IT solutions tailored to your business needs",
  service1Title: "IT Consulting",
  service1Teaser: "Strategic technology advice for your business",
  service1Description: "Our IT consulting services provide expert guidance on technology strategy, implementation, and optimization. We help businesses leverage technology to achieve their goals, improve efficiency, and stay competitive in the digital landscape.",
  service2Title: "Software Development",
  service2Teaser: "Custom software solutions for your unique needs",
  service2Description: "We develop custom software applications tailored to your specific business requirements. Our team of experienced developers uses the latest technologies and best practices to create robust, scalable, and user-friendly software solutions.",
  service3Title: "Cloud Services",
  service3Teaser: "Secure and scalable cloud infrastructure",
  service3Description: "Our cloud services help businesses migrate to the cloud, optimize cloud infrastructure, and manage cloud resources efficiently. We provide expertise in major cloud platforms including AWS, Azure, and Google Cloud.",
  service4Title: "Cybersecurity",
  service4Teaser: "Protect your business from cyber threats",
  service4Description: "Our cybersecurity services help businesses identify vulnerabilities, implement security measures, and respond to security incidents. We provide comprehensive security solutions including risk assessment, security audits, and security awareness training.",
  service5Title: "Data Analytics",
  service5Teaser: "Turn your data into actionable insights",
  service5Description: "Our data analytics services help businesses collect, process, and analyze data to gain valuable insights. We use advanced analytics techniques and tools to help you make data-driven decisions and identify new business opportunities.",
  service6Title: "Digital Transformation",
  service6Teaser: "Transform your business for the digital age",
  service6Description: "Our digital transformation services help businesses adapt to the digital age by implementing new technologies, optimizing processes, and fostering a culture of innovation. We provide a holistic approach to digital transformation that addresses technology, processes, and people.",
  readMore: "Read More",
  readLess: "Read Less",
  
  // Team
  teamTitle: "Our Team",
  teamSubtitle: "Meet the experts behind our success",
  skillsLabel: "Skills",
  teamMember1Name: "Dr. Anna Schmidt",
  teamMember1Position: "CEO",
  teamMember1Description: "With over 20 years of experience in IT management, Anna leads our company with vision and expertise.",
  teamMember1Bio: "Dr. Anna Schmidt has a Ph.D. in Computer Science and has held leadership positions at several major tech companies before founding DEGIT AG. She is passionate about using technology to solve complex business problems and is a frequent speaker at industry conferences.",
  teamMember2Name: "Thomas Müller",
  teamMember2Position: "CTO",
  teamMember2Description: "Thomas oversees our technical strategy and ensures we stay at the cutting edge of technology.",
  teamMember2Bio: "Thomas Müller has a background in software engineering and has led technical teams at startups and enterprises. He specializes in cloud architecture, AI, and emerging technologies. Thomas is committed to building scalable, secure, and innovative solutions for our clients.",
  teamMember3Name: "Julia Weber",
  teamMember3Position: "Head of Consulting",
  teamMember3Description: "Julia leads our consulting practice, helping clients navigate complex IT challenges.",
  teamMember3Bio: "Julia Weber has extensive experience in IT consulting and project management. She has helped numerous organizations across various industries implement successful IT strategies. Julia is known for her ability to translate technical concepts into business value.",
  teamMember4Name: "Markus Becker",
  teamMember4Position: "Lead Developer",
  teamMember4Description: "Markus leads our development team, ensuring high-quality code and innovative solutions.",
  teamMember4Bio: "Markus Becker is a full-stack developer with expertise in multiple programming languages and frameworks. He is passionate about clean code, performance optimization, and developer experience. Markus has contributed to several open-source projects and mentors junior developers.",
  teamMember5Name: "Sophie Hoffmann",
  teamMember5Position: "UX/UI Designer",
  teamMember5Description: "Sophie creates intuitive and beautiful user experiences for our clients' applications.",
  teamMember5Bio: "Sophie Hoffmann has a background in graphic design and human-computer interaction. She combines aesthetic sensibility with user-centered design principles to create interfaces that are both beautiful and functional. Sophie stays current with design trends while focusing on usability and accessibility.",
  teamMember6Name: "Michael Schneider",
  teamMember6Position: "Data Scientist",
  teamMember6Description: "Michael helps clients extract valuable insights from their data using advanced analytics.",
  teamMember6Bio: "Michael Schneider has a background in mathematics and statistics. He specializes in machine learning, predictive modeling, and data visualization. Michael is passionate about helping organizations become more data-driven and has implemented analytics solutions across various industries.",
  teamMember7Name: "Laura Fischer",
  teamMember7Position: "Project Manager",
  teamMember7Description: "Laura ensures our projects are delivered on time, within budget, and to the highest standards.",
  teamMember7Bio: "Laura Fischer is a certified project manager with experience managing complex IT implementations. She excels at stakeholder communication, risk management, and team coordination. Laura is known for her ability to keep projects on track while maintaining a positive team environment.",
  teamMember8Name: "David Wagner",
  teamMember8Position: "Security Specialist",
  teamMember8Description: "David protects our clients' systems and data from cyber threats and vulnerabilities.",
  teamMember8Bio: "David Wagner has extensive experience in cybersecurity, including penetration testing, security architecture, and incident response. He holds multiple security certifications and stays current with the evolving threat landscape. David is passionate about educating clients about security best practices.",
  teamMember9Name: "Lisa Krause",
  teamMember9Position: "Business Analyst",
  teamMember9Description: "Lisa bridges the gap between business needs and technical solutions, ensuring alignment.",
  teamMember9Bio: "Lisa Krause has a background in business administration and IT. She excels at requirements gathering, process analysis, and solution design. Lisa works closely with clients to understand their business challenges and translate them into technical requirements for our development team.",
  
  // Footer
  footerContactTitle: "Contact Us",
  footerLinksTitle: "Quick Links",
  footerLegalTitle: "Legal",
  footerAddress: "Musterstraße 123, 10115 Berlin, Germany",
  footerEmail: "info@degit-ag.de",
  footerPhone: "+49 30 1234567",
  footerContactButton: "Contact Form",
  footerImprint: "Imprint",
  footerPrivacy: "Privacy Policy",
  
  // Contact Form
  contactFormTitle: "Get in Touch",
  contactFormName: "Name",
  contactFormEmail: "Email",
  contactFormMessage: "Message",
  contactFormSubmit: "Send Message",
  contactFormSuccess: "Your message has been sent successfully!",
  contactFormError: "There was an error sending your message. Please try again.",
  
  // Imprint Modal
  imprintTitle: "Imprint",
  imprintContent: `
    <h3>DEGIT AG</h3>
    <p>Deutsche Geschäfts- und IT-Berater AG</p>
    <p>Musterstraße 123</p>
    <p>10115 Berlin</p>
    <p>Germany</p>
    <p>Phone: +49 30 1234567</p>
    <p>Email: info@degit-ag.de</p>
    <h3>Management Board</h3>
    <p>Dr. Anna Schmidt (CEO)</p>
    <p>Thomas Müller (CTO)</p>
    <h3>Supervisory Board</h3>
    <p>Prof. Dr. Klaus Meyer (Chairman)</p>
    <h3>Commercial Register</h3>
    <p>Registered at the District Court of Berlin-Charlottenburg</p>
    <p>Registration Number: HRB 123456</p>
    <p>VAT ID: DE123456789</p>
  `,
  
  // Privacy Modal
  privacyTitle: "Privacy Policy",
  privacyContent: `
    <h3>Privacy Policy</h3>
    <p>Last updated: June 2023</p>
    <p>DEGIT AG ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you visit our website or use our services.</p>
    <h3>Information We Collect</h3>
    <p>We may collect personal information such as your name, email address, phone number, and company name when you contact us through our website or sign up for our services.</p>
    <h3>How We Use Your Information</h3>
    <p>We use your personal information to:</p>
    <ul>
      <li>Provide and improve our services</li>
      <li>Communicate with you about our services</li>
      <li>Respond to your inquiries and requests</li>
      <li>Send you marketing communications (with your consent)</li>
    </ul>
    <h3>Data Security</h3>
    <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
    <h3>Your Rights</h3>
    <p>You have the right to access, correct, update, or delete your personal information. You can exercise these rights by contacting us at privacy@degit-ag.de.</p>
    <h3>Changes to This Privacy Policy</h3>
    <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
    <h3>Contact Us</h3>
    <p>If you have any questions about this Privacy Policy, please contact us at privacy@degit-ag.de.</p>
  `,
  
  // Common
  close: "Close",
};

// German translations
export const de: Translations = {
  // Header
  navHome: "Startseite",
  navAbout: "Über uns",
  navServices: "Dienstleistungen",
  navTeam: "Team",
  navContact: "Kontakt",
  
  // Hero
  heroTitle: "DEGIT AG",
  heroSubtitle: "Deutsche Geschäfts- und IT-Berater AG",
  heroButtonText: "Mehr erfahren",
  
  // About
  aboutTitle: "Über uns",
  aboutSubtitle: "Wir bieten innovative IT-Lösungen für Unternehmen jeder Größe",
  aboutPoint1Title: "Erfahrung",
  aboutPoint1Text: "Mit über 15 Jahren Erfahrung in der IT-Branche verfügen wir über das Know-how, um jede Herausforderung zu meistern.",
  aboutPoint2Title: "Innovation",
  aboutPoint2Text: "Wir bleiben an der Spitze der Technologie, um unseren Kunden modernste Lösungen anzubieten.",
  aboutPoint3Title: "Qualität",
  aboutPoint3Text: "Wir sind bestrebt, hochwertige Dienstleistungen zu erbringen, die die Erwartungen unserer Kunden übertreffen.",
  
  // Services
  servicesTitle: "Unsere Dienstleistungen",
  servicesSubtitle: "Umfassende IT-Lösungen, die auf Ihre Geschäftsanforderungen zugeschnitten sind",
  service1Title: "IT-Beratung",
  service1Teaser: "Strategische Technologieberatung für Ihr Unternehmen",
  service1Description: "Unsere IT-Beratungsdienste bieten Expertenhilfe bei Technologiestrategie, Implementierung und Optimierung. Wir helfen Unternehmen, Technologie zu nutzen, um ihre Ziele zu erreichen, die Effizienz zu verbessern und in der digitalen Landschaft wettbewerbsfähig zu bleiben.",
  service2Title: "Softwareentwicklung",
  service2Teaser: "Maßgeschneiderte Softwarelösungen für Ihre individuellen Bedürfnisse",
  service2Description: "Wir entwickeln maßgeschneiderte Softwareanwendungen, die auf Ihre spezifischen Geschäftsanforderungen zugeschnitten sind. Unser Team erfahrener Entwickler nutzt die neuesten Technologien und Best Practices, um robuste, skalierbare und benutzerfreundliche Softwarelösungen zu erstellen.",
  service3Title: "Cloud-Dienste",
  service3Teaser: "Sichere und skalierbare Cloud-Infrastruktur",
  service3Description: "Unsere Cloud-Dienste helfen Unternehmen bei der Migration in die Cloud, der Optimierung der Cloud-Infrastruktur und der effizienten Verwaltung von Cloud-Ressourcen. Wir bieten Expertise in den wichtigsten Cloud-Plattformen, darunter AWS, Azure und Google Cloud.",
  service4Title: "Cybersicherheit",
  service4Teaser: "Schützen Sie Ihr Unternehmen vor Cyberbedrohungen",
  service4Description: "Unsere Cybersicherheitsdienste helfen Unternehmen, Schwachstellen zu identifizieren, Sicherheitsmaßnahmen zu implementieren und auf Sicherheitsvorfälle zu reagieren. Wir bieten umfassende Sicherheitslösungen, darunter Risikobewertung, Sicherheitsaudits und Schulungen zum Sicherheitsbewusstsein.",
  service5Title: "Datenanalyse",
  service5Teaser: "Verwandeln Sie Ihre Daten in umsetzbare Erkenntnisse",
  service5Description: "Unsere Datenanalysedienste helfen Unternehmen, Daten zu sammeln, zu verarbeiten und zu analysieren, um wertvolle Erkenntnisse zu gewinnen. Wir verwenden fortschrittliche Analysetechniken und -tools, um Ihnen zu helfen, datengestützte Entscheidungen zu treffen und neue Geschäftsmöglichkeiten zu identifizieren.",
  service6Title: "Digitale Transformation",
  service6Teaser: "Transformieren Sie Ihr Unternehmen für das digitale Zeitalter",
  service6Description: "Unsere Dienstleistungen zur digitalen Transformation helfen Unternehmen, sich an das digitale Zeitalter anzupassen, indem sie neue Technologien implementieren, Prozesse optimieren und eine Kultur der Innovation fördern. Wir bieten einen ganzheitlichen Ansatz für die digitale Transformation, der Technologie, Prozesse und Menschen berücksichtigt.",
  readMore: "Mehr lesen",
  readLess: "Weniger lesen",
  
  // Team
  teamTitle: "Unser Team",
  teamSubtitle: "Lernen Sie die Experten hinter unserem Erfolg kennen",
  skillsLabel: "Fähigkeiten",
  teamMember1Name: "Dr. Anna Schmidt",
  teamMember1Position: "CEO",
  teamMember1Description: "Mit über 20 Jahren Erfahrung im IT-Management leitet Anna unser Unternehmen mit Vision und Expertise.",
  teamMember1Bio: "Dr. Anna Schmidt hat einen Doktortitel in Informatik und hatte Führungspositionen bei mehreren großen Technologieunternehmen inne, bevor sie die DEGIT AG gründete. Sie ist leidenschaftlich daran interessiert, Technologie zur Lösung komplexer Geschäftsprobleme einzusetzen, und ist eine häufige Rednerin auf Branchenkonferenzen.",
  teamMember2Name: "Thomas Müller",
  teamMember2Position: "CTO",
  teamMember2Description: "Thomas überwacht unsere technische Strategie und stellt sicher, dass wir an der Spitze der Technologie bleiben.",
  teamMember2Bio: "Thomas Müller hat einen Hintergrund in Softwareentwicklung und hat technische Teams in Startups und Unternehmen geleitet. Er ist spezialisiert auf Cloud-Architektur, KI und aufkommende Technologien. Thomas ist bestrebt, skalierbare, sichere und innovative Lösungen für unsere Kunden zu entwickeln.",
  teamMember3Name: "Julia Weber",
  teamMember3Position: "Leiterin Beratung",
  teamMember3Description: "Julia leitet unsere Beratungspraxis und hilft Kunden, komplexe IT-Herausforderungen zu bewältigen.",
  teamMember3Bio: "Julia Weber verfügt über umfangreiche Erfahrung in IT-Beratung und Projektmanagement. Sie hat zahlreichen Organisationen in verschiedenen Branchen geholfen, erfolgreiche IT-Strategien zu implementieren. Julia ist bekannt für ihre Fähigkeit, technische Konzepte in Geschäftswert zu übersetzen.",
  teamMember4Name: "Markus Becker",
  teamMember4Position: "Leitender Entwickler",
  teamMember4Description: "Markus leitet unser Entwicklungsteam und sorgt für hochwertigen Code und innovative Lösungen.",
  teamMember4Bio: "Markus Becker ist ein Full-Stack-Entwickler mit Expertise in mehreren Programmiersprachen und Frameworks. Er ist leidenschaftlich an sauberem Code, Leistungsoptimierung und Entwicklererfahrung interessiert. Markus hat zu mehreren Open-Source-Projekten beigetragen und betreut Junior-Entwickler.",
  teamMember5Name: "Sophie Hoffmann",
  teamMember5Position: "UX/UI-Designerin",
  teamMember5Description: "Sophie erstellt intuitive und schöne Benutzererfahrungen für die Anwendungen unserer Kunden.",
  teamMember5Bio: "Sophie Hoffmann hat einen Hintergrund in Grafikdesign und Mensch-Computer-Interaktion. Sie kombiniert ästhetisches Empfinden mit nutzerzentrierten Designprinzipien, um Schnittstellen zu schaffen, die sowohl schön als auch funktional sind. Sophie bleibt auf dem Laufenden mit Designtrends, während sie sich auf Benutzerfreundlichkeit und Zugänglichkeit konzentriert.",
  teamMember6Name: "Michael Schneider",
  teamMember6Position: "Data Scientist",
  teamMember6Description: "Michael hilft Kunden, wertvolle Erkenntnisse aus ihren Daten mithilfe fortschrittlicher Analysen zu gewinnen.",
  teamMember6Bio: "Michael Schneider hat einen Hintergrund in Mathematik und Statistik. Er ist spezialisiert auf maschinelles Lernen, prädiktive Modellierung und Datenvisualisierung. Michael ist leidenschaftlich daran interessiert, Organisationen dabei zu helfen, datenorientierter zu werden, und hat Analyselösungen in verschiedenen Branchen implementiert.",
  teamMember7Name: "Laura Fischer",
  teamMember7Position: "Projektmanagerin",
  teamMember7Description: "Laura stellt sicher, dass unsere Projekte pünktlich, im Budget und nach höchsten Standards geliefert werden.",
  teamMember7Bio: "Laura Fischer ist eine zertifizierte Projektmanagerin mit Erfahrung in der Verwaltung komplexer IT-Implementierungen. Sie zeichnet sich durch Stakeholder-Kommunikation, Risikomanagement und Teamkoordination aus. Laura ist bekannt für ihre Fähigkeit, Projekte auf Kurs zu halten und gleichzeitig eine positive Teamumgebung zu erhalten.",
  teamMember8Name: "David Wagner",
  teamMember8Position: "Sicherheitsspezialist",
  teamMember8Description: "David schützt die Systeme und Daten unserer Kunden vor Cyberbedrohungen und Schwachstellen.",
  teamMember8Bio: "David Wagner verfügt über umfangreiche Erfahrung in der Cybersicherheit, einschließlich Penetrationstests, Sicherheitsarchitektur und Vorfallreaktion. Er besitzt mehrere Sicherheitszertifizierungen und bleibt auf dem Laufenden mit der sich entwickelnden Bedrohungslandschaft. David ist leidenschaftlich daran interessiert, Kunden über Sicherheits-Best-Practices aufzuklären.",
  teamMember9Name: "Lisa Krause",
  teamMember9Position: "Business Analystin",
  teamMember9Description: "Lisa überbrückt die Lücke zwischen Geschäftsanforderungen und technischen Lösungen und sorgt für Abstimmung.",
  teamMember9Bio: "Lisa Krause hat einen Hintergrund in Betriebswirtschaft und IT. Sie zeichnet sich durch Anforderungserfassung, Prozessanalyse und Lösungsdesign aus. Lisa arbeitet eng mit Kunden zusammen, um ihre Geschäftsherausforderungen zu verstehen und sie in technische Anforderungen für unser Entwicklungsteam zu übersetzen.",
  
  // Footer
  footerContactTitle: "Kontakt",
  footerLinksTitle: "Schnelllinks",
  footerLegalTitle: "Rechtliches",
  footerAddress: "Musterstraße 123, 10115 Berlin, Deutschland",
  footerEmail: "info@degit-ag.de",
  footerPhone: "+49 30 1234567",
  footerContactButton: "Kontaktformular",
  footerImprint: "Impressum",
  footerPrivacy: "Datenschutz",
  
  // Contact Form
  contactFormTitle: "Kontaktieren Sie uns",
  contactFormName: "Name",
  contactFormEmail: "E-Mail",
  contactFormMessage: "Nachricht",
  contactFormSubmit: "Nachricht senden",
  contactFormSuccess: "Ihre Nachricht wurde erfolgreich gesendet!",
  contactFormError: "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
  
  // Imprint Modal
  imprintTitle: "Impressum",
  imprintContent: `
    <h3>DEGIT AG</h3>
    <p>Deutsche Geschäfts- und IT-Berater AG</p>
    <p>Musterstraße 123</p>
    <p>10115 Berlin</p>
    <p>Deutschland</p>
    <p>Telefon: +49 30 1234567</p>
    <p>E-Mail: info@degit-ag.de</p>
    <h3>Vorstand</h3>
    <p>Dr. Anna Schmidt (Vorstandsvorsitzende)</p>
    <p>Thomas Müller (CTO)</p>
    <h3>Aufsichtsrat</h3>
    <p>Prof. Dr. Klaus Meyer (Vorsitzender)</p>
    <h3>Handelsregister</h3>
    <p>Eingetragen beim Amtsgericht Berlin-Charlottenburg</p>
    <p>Registernummer: HRB 123456</p>
    <p>USt-IdNr.: DE123456789</p>
  `,
  
  // Privacy Modal
  privacyTitle: "Datenschutzerklärung",
  privacyContent: `
    <h3>Datenschutzerklärung</h3>
    <p>Zuletzt aktualisiert: Juni 2023</p>
    <p>DEGIT AG ("wir", "uns" oder "unser") ist bestrebt, Ihre Privatsphäre zu schützen. Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten erfassen, verwenden und offenlegen, wenn Sie unsere Website besuchen oder unsere Dienste nutzen.</p>
    <h3>Informationen, die wir sammeln</h3>
    <p>Wir können personenbezogene Daten wie Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer und Ihren Firmennamen erfassen, wenn Sie uns über unsere Website kontaktieren oder sich für unsere Dienste anmelden.</p>
    <h3>Wie wir Ihre Informationen verwenden</h3>
    <p>Wir verwenden Ihre personenbezogenen Daten, um:</p>
    <ul>
      <li>Unsere Dienste bereitzustellen und zu verbessern</li>
      <li>Mit Ihnen über unsere Dienste zu kommunizieren</li>
      <li>Auf Ihre Anfragen und Wünsche zu reagieren</li>
      <li>Ihnen Marketingmitteilungen zu senden (mit Ihrer Zustimmung)</li>
    </ul>
    <h3>Datensicherheit</h3>
    <p>Wir implementieren angemessene Sicherheitsmaßnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung zu schützen.</p>
    <h3>Ihre Rechte</h3>
    <p>Sie haben das Recht, auf Ihre personenbezogenen Daten zuzugreifen, sie zu korrigieren, zu aktualisieren oder zu löschen. Sie können diese Rechte ausüben, indem Sie uns unter privacy@degit-ag.de kontaktieren.</p>
    <h3>Änderungen an dieser Datenschutzerklärung</h3>
    <p>Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren, indem wir die neue Datenschutzerklärung auf dieser Seite veröffentlichen.</p>
    <h3>Kontaktieren Sie uns</h3>
    <p>Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter privacy@degit-ag.de.</p>
  `,
  
  // Common
  close: "Schließen",
};

// Create a context for language
export type LanguageContextType = {
  language: 'en' | 'de';
  setLanguage: (lang: 'en' | 'de') => void;
  t: Translations;
};

// Hook to get browser language
export const useBrowserLanguage = (): 'en' | 'de' => {
  const [browserLanguage, setBrowserLanguage] = useState<'en' | 'de'>('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as 'en' | 'de' | null;
    
    if (storedLanguage) {
      setBrowserLanguage(storedLanguage);
      return;
    }
    
    const language = navigator.language.split('-')[0];
    if (language === 'de') {
      setBrowserLanguage('de');
    } else {
      setBrowserLanguage('en');
    }
  }, []);

  return browserLanguage;
};

// Hook to use translations
export const useTranslations = (language: 'en' | 'de'): Translations => {
  return language === 'en' ? en : de;
};