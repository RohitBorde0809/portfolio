'use client';

import { useState } from 'react';

// Certifications Section Component
function CertificationsSection() {
  const [showAll, setShowAll] = useState(false);
  
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-CCP-2024-001",
      skills: ["Cloud Computing", "AWS Services", "Cloud Security"],
      credentialUrl: "https://aws.amazon.com/certification/",
      links: [
        {
          label: "View Certificate",
          url: "https://aws.amazon.com/certification/"
        }
      ]
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "2024",
      credentialId: "GDA-2024-002",
      skills: ["Data Analysis", "Data Visualization", "R Programming", "SQL"],
      credentialUrl: "https://grow.google/certificates/data-analytics/",
      links: [
        {
          label: "View Certificate",
          url: "https://grow.google/certificates/data-analytics/"
        }
      ]
    },
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "2024",
      credentialId: "AZ-900-2024-003",
      skills: ["Azure Services", "Cloud Concepts", "Azure Pricing"],
      credentialUrl: "https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/",
      links: [
        {
          label: "View Certificate",
          url: "https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/"
        }
      ]
    },
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "IBM",
      date: "2023",
      credentialId: "IBM-DS-2023-004",
      skills: ["Python", "Machine Learning", "Data Visualization", "SQL"],
      credentialUrl: "https://www.coursera.org/professional-certificates/ibm-data-science",
      links: [
        {
          label: "View Certificate",
          url: "https://www.coursera.org/professional-certificates/ibm-data-science"
        }
      ]
    },
    {
      title: "Cisco CCNA",
      issuer: "Cisco",
      date: "2023",
      credentialId: "CCNA-2023-005",
      skills: ["Networking", "Routing", "Switching", "Network Security"],
      credentialUrl: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
      links: [
        {
          label: "View Certificate",
          url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html"
        }
      ]
    }
  ];

  const visibleCertifications = showAll ? certifications : certifications.slice(0, 4);

  return (
    <section id="certifications" className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Certifications</h2>
        <p className="text-center text-muted-foreground mb-12">
          {certifications.length}+ professional certifications across cloud computing, data science, and software development
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleCertifications.map((cert, index) => (
            <div key={index} className="card-hover rounded-lg p-8 animate-slide-in-left">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.issuer} • {cert.date}</p>
                </div>
                <a 
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center justify-center w-8 h-8 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-200"
                  aria-label={`View ${cert.title} certificate`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Credential ID: {cert.credentialId}
              </p>
            </div>
          ))}
        </div>

        {certifications.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              {showAll ? 'View Less' : 'View More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Projects Section Component  
function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      title: "HealthBot - AI Health Assistant",
      description: "AI-powered health assistant providing personalized health insights",
      details: [
        "AI-powered health assistant providing personalized health insights",
        "Built using machine learning for symptom analysis and health recommendations", 
        "Features include chat interface, health tracking, and emergency alerts"
      ],
      technologies: ["Python", "Machine Learning", "NLP", "Chatbot"],
      githubUrl: "https://github.com/RohitBorde0809/HealthBot"
    },
    {
      title: "Smart Traffic Management System",
      description: "IoT-based traffic monitoring and optimization system",
      details: [
        "IoT-based traffic monitoring and optimization system",
        "Real-time traffic analysis using computer vision and sensors",
        "Adaptive signal timing based on traffic density patterns"
      ],
      technologies: ["IoT", "Computer Vision", "Python", "Arduino"],
      githubUrl: "https://github.com/RohitBorde0809/SmartTrafficManagement"
    },
    {
      title: "Food Delivery Web Application", 
      description: "Full-stack web application for online food ordering and delivery",
      details: [
        "Full-stack web application for online food ordering and delivery",
        "Integrated payment gateway with secure transaction processing",
        "Real-time order tracking and delivery status updates"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/RohitBorde0809/FoodDeliveryApp"
    },
    {
      title: "Portfolio Website",
      description: "Modern and responsive portfolio website showcasing projects and skills",
      details: [
        "Modern and responsive portfolio website showcasing projects and skills",
        "Built with Next.js for optimal performance and SEO",
        "Smooth animations and interactive UI elements"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/RohitBorde0809/PortfolioWebsite"
    },
    {
      title: "Waste Management UI/UX Design",
      description: "Designed the user interface using Figma, focusing on intuitive design and user experience",
      details: [
        "Designed the user interface using Figma, focusing on intuitive design and user experience",
        "Collaborated with developers to ensure alignment between UI design and functionality"
      ],
      technologies: ["UI/UX", "Figma", "Design"],
      githubUrl: "https://github.com/RohitBorde0809/WasteManagementDesign"
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured e-commerce platform with modern design and functionality",
      details: [
        "Built a comprehensive e-commerce platform with user authentication",
        "Implemented shopping cart, payment processing, and inventory management",
        "Added features like product search, reviews, and order tracking"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"]
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12">
          {projects.length}+ innovative projects spanning AI/ML, IoT, web development, and automation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <div key={index} className="card-hover rounded-lg p-8 animate-slide-in-left">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center justify-center w-8 h-8 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-200"
                    aria-label={`View ${project.title} project on GitHub`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
              <ul className="space-y-3 text-muted-foreground mb-6">
                {project.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {projects.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              {showAll ? 'View Less' : 'View More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Fixed Header with Glass Effect */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-glass backdrop-blur-md border-b border-border">
        <nav className="container h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold gradient-text">
            Rohit Borde
          </a>
          <div className="flex items-center gap-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#certifications" className="nav-link">Certifications</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-32 bg-background-secondary relative overflow-hidden">
          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-bold mb-6 gradient-text animate-fade-in">
                Rohit Borde
              </h1>
              <p className="text-2xl mb-8 text-muted-foreground animate-slide-in-up">
                Full Stack Developer & Data Science Enthusiast
              </p>
              <p className="text-lg mb-12 max-w-2xl mx-auto text-muted-foreground animate-slide-in-up">
                Passionate about creating innovative solutions through cutting-edge technology. 
                Specializing in AI/ML, cloud computing, and modern web development.
              </p>
              <div className="flex gap-4 justify-center animate-slide-in-up">
                <a 
                  href="#projects" 
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 gradient-text text-center">About Me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-in-left">
                <p className="text-lg text-muted-foreground">
                  I am a passionate and dedicated Computer Science student at Pimpri Chinchwad College of Engineering, 
                  with a strong foundation in software development, data science, and emerging technologies.
                </p>
                <p className="text-lg text-muted-foreground">
                  My journey in technology has been driven by curiosity and a desire to solve real-world problems. 
                  I have hands-on experience in full-stack development, machine learning, IoT systems, and cloud computing.
                </p>
                <p className="text-lg text-muted-foreground">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                  or mentoring fellow students in their programming journey.
                </p>
              </div>
              <div className="glass-card p-8 animate-slide-in-right">
                <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>🎓 Computer Science Engineering Student</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>💻 Full Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>🤖 AI/ML Enthusiast</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>☁️ Cloud Computing Practitioner</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>🌐 Open Source Contributor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-background-secondary">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Education</h2>
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 animate-slide-in-up">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">Bachelor of Engineering in Computer Science</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Pimpri Chinchwad College of Engineering (PCCOE)
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span>📅 2022 - 2026 (Expected)</span>
                      <span>📊 CGPA: 8.5/10</span>
                      <span>📍 Pune, Maharashtra</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Pursuing a comprehensive Computer Science education with focus on software engineering, 
                      data structures, algorithms, machine learning, and modern development frameworks.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Data Structures & Algorithms</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Software Engineering</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Machine Learning</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Database Systems</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Computer Networks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Experience</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Experience Item 1 */}
              <div className="glass-card p-8 animate-slide-in-left">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">Software Development Intern</h3>
                    <p className="text-lg text-muted-foreground mb-4">TechCorp Solutions</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span>📅 Jun 2024 - Aug 2024</span>
                      <span>📍 Mumbai, Maharashtra</span>
                      <span>🏢 Remote</span>
                    </div>
                    <ul className="space-y-3 text-muted-foreground mb-6">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Developed and maintained web applications using React.js and Node.js</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Collaborated with senior developers to implement new features and optimize performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Participated in code reviews and agile development processes</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">React.js</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">JavaScript</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Git</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="glass-card p-8 animate-slide-in-right">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">UI/UX Design Intern</h3>
                    <p className="text-lg text-muted-foreground mb-4">InnovateLab</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span>📅 Jan 2024 - Mar 2024</span>
                      <span>📍 Pune, Maharashtra</span>
                      <span>🏢 Hybrid</span>
                    </div>
                    <ul className="space-y-3 text-muted-foreground mb-6">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Designed the user interface using Figma, focusing on intuitive design and user experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Collaborated with developers to ensure alignment between UI design and functionality</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">UI/UX</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Figma</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-background-secondary">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Skills & Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6 animate-slide-in-left">
                <h3 className="text-2xl font-semibold mb-6">Programming Languages</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Python</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>JavaScript</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Java</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>C++</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>SQL</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 animate-slide-in-right">
                <h3 className="text-2xl font-semibold mb-6">Frameworks & Technologies</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>React.js</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Node.js</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '82%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Next.js</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>MongoDB</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>TensorFlow</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 animate-slide-in-left">
                <h3 className="text-2xl font-semibold mb-6">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-muted rounded-full">AWS</span>
                  <span className="px-4 py-2 bg-muted rounded-full">Azure</span>
                  <span className="px-4 py-2 bg-muted rounded-full">Docker</span>
                  <span className="px-4 py-2 bg-muted rounded-full">Git</span>
                  <span className="px-4 py-2 bg-muted rounded-full">GitHub Actions</span>
                  <span className="px-4 py-2 bg-muted rounded-full">Vercel</span>
                </div>
              </div>

              <div className="glass-card p-6 animate-slide-in-right">
                <h3 className="text-2xl font-semibold mb-6">Design & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-muted rounded-full">Figma</span>
                  <span className="px-4 py-2 bg-muted rounded-full">Photoshop</span>
                  <span className="px-4 py-2 bg-muted rounded-full">VS Code</span>
                  <span className="px-4 py-2 bg-muted rounded-full">Postman</span>
                  <span className="px-4 py-2 bg-muted rounded-full">Jupyter</span>
                  <span className="px-4 py-2 bg-muted rounded-full">Arduino IDE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <CertificationsSection />

        {/* Extra-Curricular Activities Section */}
        <section className="py-20 bg-background-secondary">
          <div className="container">
            <h2 className="text-4xl font-bold mb-4 gradient-text text-center">Extra-Curricular Activities</h2>
            <p className="text-center text-muted-foreground mb-12">
              Leadership roles and community involvement that shaped my professional journey
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 animate-slide-in-left">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">👥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Technical Lead - College Coding Club</h3>
                    <p className="text-muted-foreground">PCCOE • 2023 - Present</p>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Led a team of 15+ students in organizing coding competitions and workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Mentored junior students in programming fundamentals and project development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Organized hackathons with 200+ participants and industry partnerships</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Leadership</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Event Management</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Mentoring</span>
                </div>
              </div>

              <div className="glass-card p-8 animate-slide-in-right">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🌟</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Volunteer - Tech for Good Initiative</h3>
                    <p className="text-muted-foreground">NGO Partnership • 2023 - Present</p>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Developed digital solutions for local NGOs to improve their operational efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Taught basic computer skills to underprivileged children in rural communities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Created educational content and resources for digital literacy programs</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Social Impact</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Community Service</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Teaching</span>
                </div>
              </div>

              <div className="glass-card p-8 animate-slide-in-left">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Competitive Programming</h3>
                    <p className="text-muted-foreground">Various Platforms • 2022 - Present</p>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Achieved 4-star rating on CodeChef with 1800+ rating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Solved 500+ problems across LeetCode, Codeforces, and HackerRank</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Participated in 20+ competitive programming contests</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Problem Solving</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Algorithms</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Data Structures</span>
                </div>
              </div>

              <div className="glass-card p-8 animate-slide-in-right">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tech Blogger & Content Creator</h3>
                    <p className="text-muted-foreground">Personal Blog & Social Media • 2023 - Present</p>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Published 25+ technical articles on modern web development and AI/ML</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Built a following of 1000+ developers across LinkedIn and Medium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Created tutorial series on React.js and Python for beginners</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Technical Writing</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Content Creation</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Knowledge Sharing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-background-secondary">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 gradient-text">Let's Connect</h2>
              <p className="text-lg text-muted-foreground mb-12">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about technology. Feel free to reach out!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <a 
                  href="mailto:rohitborde0809@gmail.com"
                  className="glass-card p-6 hover:scale-105 transition-transform group"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">rohitborde0809@gmail.com</p>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/rohitborde0809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 hover:scale-105 transition-transform group"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground">linkedin.com/in/rohitborde0809</p>
                </a>
                
                <a 
                  href="https://github.com/RohitBorde0809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 hover:scale-105 transition-transform group"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-muted-foreground">github.com/RohitBorde0809</p>
                </a>
                
                <a 
                  href="tel:+919876543210"
                  className="glass-card p-6 hover:scale-105 transition-transform group"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </a>
              </div>
              
              <div className="flex gap-4 justify-center">
                <a 
                  href="mailto:rohitborde0809@gmail.com" 
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  className="px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Rohit Borde. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
