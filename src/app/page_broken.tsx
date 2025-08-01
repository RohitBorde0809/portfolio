'use client';

import { useState } from 'react';

function CertificationsSection() {
  const [showAll, setShowAll] = useState(false);

  const certifications = [
    {
      title: "Google Cloud-Cloud Engineer Track",
      provider: "Google Cloud",
      date: "July 22, 2024",
      link: "https://drive.google.com/file/d/1A98g76vVbMahrGPFOBuTO6bwykgVullw/view?usp=drive_link",
      description: [
        "Completed a specialized online Cloud Engineer Track in Google Cloud SkillBuild program",
        "Learn Associate Cloud Engineer deploys and secures applications, services, and infrastructure",
        "Performs common platform-based tasks using Google-managed or self-managed services"
      ]
    },
    {
      title: "Cybersecurity Certification",
      provider: "Google Cloud",
      date: "July 25, 2024", 
      link: "https://www.credly.com/badges/42e8ce36-a775-462d-baef-f0ea685978dc",
      description: [
        "Builds on foundational knowledge of cybersecurity fundamentals",
        "Work with Google Cloud tools like Security Command Center, Compute Engine, IAM",
        "Gain practical skills in cloud security principles and risk management"
      ]
    },
    {
      title: "AWS Academy Cloud Foundations",
      provider: "AWS Academy",
      date: "July 09, 2024",
      link: "https://www.credly.com/badges/0f05c319-e440-48c1-8c3e-9997afa4c845",
      description: [
        "Learn what cloud computing is and its fundamental concepts",
        "Gain insights into AWS offerings related to computing, storage, databases",
        "Understand the advantages of cloud computing"
      ]
    },
    {
      title: "AWS Academy Introduction to Cloud",
      provider: "AWS Academy", 
      date: "July 08, 2024",
      link: "https://www.credly.com/badges/722fe007-1a15-4ba2-a898-00d343deaefd",
      description: [
        "Learn what cloud computing is and its fundamental concepts",
        "Learn about secure delivery mechanisms within AWS"
      ]
    },
    {
      title: "Machine Learning for Data Science Projects",
      provider: "IBM",
      date: "Jan 13, 2024",
      link: "https://www.credly.com/badges/4820d6a8-d2f8-42ef-9db3-63c1357c9d51/public_url",
      description: [
        "Learn how to create effective data models",
        "Dive into ML algorithms and principles"
      ]
    },
    {
      title: "Getting Started with Enterprise Data Science", 
      provider: "IBM",
      date: "Dec 28, 2023",
      link: "https://www.credly.com/badges/45e4d893-d69e-40fb-9ed8-3837d39c48a7/public_url",
      description: [
        "Explore data science team roles and responsibilities",
        "Learn about real-world use cases for data science methods",
        "Understand essential data analysis tools"
      ]
    },
    {
      title: "Python Fundamentals",
      provider: "IBM",
      date: "Dec 15, 2023",
      link: "https://www.credly.com/badges/your-badge-id",
      description: [
        "Master Python programming fundamentals",
        "Learn object-oriented programming concepts",
        "Build practical Python applications"
      ]
    },
    {
      title: "Data Analytics with Python",
      provider: "IBM", 
      date: "Nov 28, 2023",
      link: "https://www.credly.com/badges/your-badge-id",
      description: [
        "Analyze data using Python libraries",
        "Create data visualizations with matplotlib and seaborn",
        "Work with pandas for data manipulation"
      ]
    },
    {
      title: "Introduction to Docker",
      provider: "IBM",
      date: "Nov 10, 2023", 
      link: "https://www.credly.com/badges/your-badge-id",
      description: [
        "Learn containerization with Docker",
        "Build and deploy containerized applications",
        "Understand Docker networking and volumes"
      ]
    },
    {
      title: "Git and GitHub Fundamentals",
      provider: "IBM",
      date: "Oct 25, 2023",
      link: "https://www.credly.com/badges/your-badge-id", 
      description: [
        "Master version control with Git",
        "Collaborate on projects using GitHub",
        "Learn branching and merging strategies"
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
            <div key={index} className="card-hover rounded-lg p-6 animate-slide-up">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 inline-flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
                      title="View Certificate"
                    >
                      ↗
                    </a>
                  </div>
                  <p className="text-muted-foreground">{cert.provider}</p>
                </div>
                <span className="text-sm text-muted-foreground">{cert.date}</span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {cert.description.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="button-primary inline-flex items-center gap-2"
          >
            {showAll ? 'Show Less' : `View More (${certifications.length - 4} more)`}
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "HealthBot - AI Health Assistant",
      link: "https://github.com/RohitBorde0809/HealthBot",
      description: [
        "Developed a MERN stack application for health-related conversations with an AI chatbot",
        "Implemented real-time chat interface with Google Gemini AI and translation to Marathi",
        "Built user authentication, chat history, and responsive design using TypeScript and Chakra UI"
      ],
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Google Gemini", "JWT"]
    },
    {
      title: "LumioFlow – Energy Tracking System",
      link: "https://github.com/RohitBorde0809/LumioFlow",
      description: [
        "Connected IoT components and assisted with Arduino coding for real-time energy monitoring",
        "Focused on hardware integration; ensured accurate data collection for the web-based tracking system",
        "Implemented automated alerts and notifications for abnormal power consumption patterns using threshold analysis"
      ],
      technologies: ["IoT", "Arduino", "Web Development", "Real-time Monitoring"]
    },
    {
      title: "Employee Management System",
      link: "https://github.com/RohitBorde0809/Employee_Management_System",
      description: [
        "Built an Employee Management System using JDBC and MySQL to manage employee records",
        "Streamlined HR processes with efficient data handling and user-friendly features",
        "Implemented secure authentication and role-based access control"
      ],
      technologies: ["Java", "JDBC", "MySQL", "Authentication"]
    },
    {
      title: "Crop Disease Prediction",
      link: "https://github.com/RohitBorde0809/Crop-Disease-Prediction-",
      description: [
        "Developed ML models using TensorFlow and scikit-learn for predicting crop diseases",
        "Enhanced model accuracy through data preprocessing and feature extraction techniques",
        "Achieved high accuracy in disease prediction to help farmers identify crop issues early"
      ],
      technologies: ["Machine Learning", "TensorFlow", "Python", "scikit-learn", "Computer Vision"]
    },
    {
      title: "Baby Nutrition App",
      link: "https://github.com/RohitBorde0809/Baby-Nutrition-App",
      description: [
        "Designed the user interface using Figma, focusing on intuitive design and user experience",
        "Collaborated with developers to ensure alignment between UI design and functionality"
      ],
      technologies: ["UI/UX", "Figma", "Design"]
    },
    {
      title: "Smart Home Automation System",
      link: "https://github.com/RohitBorde0809/Smart-Home",
      description: [
        "Developed a comprehensive IoT-based home automation system",
        "Integrated multiple sensors and actuators for automated control",
        "Built mobile app interface for remote monitoring and control"
      ],
      technologies: ["IoT", "Arduino", "React Native", "Firebase"]
    },
    {
      title: "Weather Prediction ML Model",
      link: "https://github.com/RohitBorde0809/Weather-Prediction",
      description: [
        "Created machine learning model for accurate weather forecasting",
        "Processed historical weather data for training and validation",
        "Achieved 85% accuracy in short-term weather predictions"
      ],
      technologies: ["Python", "scikit-learn", "Pandas", "Data Analysis"]
    },
    {
      title: "E-Commerce Platform",
      link: "https://github.com/RohitBorde0809/E-Commerce",
      description: [
        "Built full-stack e-commerce platform with modern UI/UX",
        "Implemented secure payment gateway integration",
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
            <div key={index} className="card-hover rounded-lg p-8 animate-slide-up">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center justify-center w-8 h-8 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-200"
                  title="View on GitHub"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              <ul className="space-y-3 text-muted-foreground mb-6">
                {project.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-muted rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="button-primary inline-flex items-center gap-2"
          >
            {showAll ? 'Show Less' : `View More (${projects.length - 4} more)`}
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
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

      {/* Main Content */}
      <main className="pt-24 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6 animate-fade-in">
                Hi, I'm <span className="gradient-text">Rohit Borde</span>
              </h1>
              <h2 className="text-3xl font-semibold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Full Stack Developer
              </h2>
              <p className="text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                Passionate about building exceptional digital experiences
              </p>
              <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <a href="#contact" className="button-primary">
                  Get in Touch
                </a>
                <a href="#projects" className="button-primary">
                  View Projects
                </a>
              </div>
              
              {/* Social Links */}
              <div className="mt-12 flex flex-wrap items-center gap-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <a 
                  href="https://www.linkedin.com/in/rohit-borde-9b2029221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/RohitBorde0809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a 
                  href="https://www.credly.com/users/rohit-borde.6a03d346/edit#credly"
            target="_blank"
            rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  Credly
          </a>
          <a
                  href="https://www.cloudskillsboost.google/public_profiles/4026b74b-8a77-439a-97be-c007d0905fa6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018 1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062-2.31 0-4.187 1.956-4.187 4.273 0 2.315 1.877 4.277 4.187 4.277 2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474 0 4.01-2.677 6.86-6.72 6.86z"/>
                  </svg>
                  Google SkillBuilder
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 section-pattern opacity-10"></div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-background-secondary relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 section-pattern opacity-5"></div>
          
          <div className="container relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A passionate Full Stack Developer with a unique blend of software development and industrial expertise, 
                dedicated to creating innovative solutions that bridge technology and real-world applications.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Profile Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Professional Summary */}
                <div className="glass-card p-8 animate-slide-in-left">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <h3 className="text-2xl font-semibold">Professional Summary</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                    Proactive Computer Engineering student with hands-on experience in software development, hardware integration, 
                    IoT systems, and industrial operations. I specialize in applying cutting-edge technology to enhance manufacturing 
                    efficiency and automation processes.
                  </p>
                  
                  {/* Core Competencies Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground text-lg border-b border-border pb-2">Technical Expertise</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          Full Stack Development (MERN, Next.js)
                        </li>
                        <li className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          Machine Learning & AI Solutions
                        </li>
                        <li className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          Cloud Computing (AWS, GCP)
                        </li>
                        <li className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          IoT & Embedded Systems
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground text-lg border-b border-border pb-2">Industry Knowledge</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-accent"></div>
                          Manufacturing Process Optimization
                        </li>
                        <li className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-accent"></div>
                          Quality Control Systems
                        </li>
                        <li className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-accent"></div>
                          Industrial Automation
                        </li>
                        <li className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-accent"></div>
                          Data-Driven Decision Making
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="glass-card p-8 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <h3 className="text-2xl font-semibold">Key Achievements</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-medium text-foreground">🏆 Hackathon Success</h4>
                        <p className="text-sm text-muted-foreground">2nd Place at Hacknovate-2k25 for LumioFlow</p>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-medium text-foreground">🤖 ML Innovation</h4>
                        <p className="text-sm text-muted-foreground">Developed crop disease prediction model with 80% accuracy</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-accent pl-4">
                        <h4 className="font-medium text-foreground">☁️ Cloud Certified</h4>
                        <p className="text-sm text-muted-foreground">Multiple AWS & GCP certifications</p>
                      </div>
                      <div className="border-l-4 border-accent pl-4">
                        <h4 className="font-medium text-foreground">🏭 Industrial Experience</h4>
                        <p className="text-sm text-muted-foreground">Hands-on automation and process improvement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Cards */}
              <div className="space-y-8">
                {/* Current Focus */}
                <div className="glass-card p-6 animate-slide-in-right">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    <h3 className="text-lg font-semibold">Current Focus</h3>
                  </div>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                      <div>
                        <span className="block font-medium text-foreground">Academic Excellence</span>
                        <span className="text-sm">B.Tech Computer Science & Engineering</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                      <div>
                        <span className="block font-medium text-foreground">Technology Mastery</span>
                        <span className="text-sm">AI/ML and Cloud Technologies</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                      <div>
                        <span className="block font-medium text-foreground">Innovation Projects</span>
                        <span className="text-sm">Industrial IoT Solutions</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Skills & Interests */}
                <div className="glass-card p-6 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                    <h3 className="text-lg font-semibold">Areas of Interest</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">AI/ML</span>
                    <span className="px-3 py-2 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium">IoT</span>
                    <span className="px-3 py-2 bg-green-500/10 text-green-500 rounded-full text-sm font-medium">Cloud</span>
                    <span className="px-3 py-2 bg-purple-500/10 text-purple-500 rounded-full text-sm font-medium">Automation</span>
                    <span className="px-3 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium">Web Dev</span>
                    <span className="px-3 py-2 bg-pink-500/10 text-pink-500 rounded-full text-sm font-medium">Data Science</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="glass-card p-6 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <h3 className="text-lg font-semibold">Quick Stats</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Projects Completed</span>
                      <span className="font-semibold text-foreground">5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Certifications</span>
                      <span className="font-semibold text-foreground">10+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Technologies</span>
                      <span className="font-semibold text-foreground">10+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Years Learning</span>
                      <span className="font-semibold text-foreground">3+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="container">
            <h2 className="text-4xl font-bold mb-4 gradient-text text-center">Education Journey</h2>
            <p className="text-center text-muted-foreground mb-12">Building a strong foundation in Computer Science & Engineering</p>
            
            <div className="space-y-8 max-w-3xl mx-auto">
              <div className="card-hover rounded-lg p-6 animate-slide-up">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">B.Tech in Computer Science & Engineering</h3>
                    <p className="text-muted-foreground">Deogiri Institute Of Engineering & Management Studies, Aurangabad</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">Aug 2022 – Present</span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <span className="text-sm text-muted-foreground">Currently Pursuing</span>
              </div>

              <div className="card-hover rounded-lg p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">HSC (Science)</h3>
                    <p className="text-muted-foreground">Vivekanand College, Aurangabad</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">June 2021 – July 2022</span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{ width: '76%' }}></div>
                </div>
                <span className="text-sm text-muted-foreground">76% Score</span>
              </div>

              <div className="card-hover rounded-lg p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">SSC (Vocational with Mechanical Technical)</h3>
                    <p className="text-muted-foreground">Raja Shivaji High School, Aurangabad</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">June 2019 – July 2020</span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{ width: '86.2%' }}></div>
                </div>
                <span className="text-sm text-muted-foreground">86.20% Score</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-background-secondary">
          <div className="container">
            <h2 className="text-4xl font-bold mb-4 gradient-text text-center">Professional Experience</h2>
            <p className="text-center text-muted-foreground mb-12">Building real-world expertise through diverse internships</p>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="glass-card relative p-8 animate-slide-in-left">
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-10 w-6 h-6 rounded-full bg-background-secondary border-4 border-primary"></div>
                {/* Timeline Line */}
                <div className="absolute -left-0.5 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent"></div>
                
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold">Machine Learning Intern</h3>
                    <p className="text-muted-foreground">Sudarshan Arial Solution</p>
                    <p className="text-sm text-muted-foreground mt-1">Sep 2024 – Dec 2024</p>
                    <p className="text-sm text-muted-foreground mt-1">Aurangabad (Remote)</p>
                  </div>
                  <div className="md:w-2/3">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Key Responsibilities</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>Developed ML models for plant disease prediction using Python, TensorFlow, and scikit-learn</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>Leveraged Kaggle datasets for training and conducted data preprocessing to enhance model accuracy</span>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-background rounded-full text-sm">Python</span>
                        <span className="px-3 py-1 bg-background rounded-full text-sm">TensorFlow</span>
                        <span className="px-3 py-1 bg-background rounded-full text-sm">Machine Learning</span>
                        <span className="px-3 py-1 bg-background rounded-full text-sm">Data Science</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card relative p-8 animate-slide-in-right">
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-10 w-6 h-6 rounded-full bg-background-secondary border-4 border-primary"></div>
                {/* Timeline Line */}
                <div className="absolute -left-0.5 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent"></div>
                
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold">Tech Intern</h3>
                    <p className="text-muted-foreground">Laxmi Agni Components & Forgings Pvt Ltd</p>
                    <p className="text-sm text-muted-foreground mt-1">Feb 2024 – Oct 2024</p>
                    <p className="text-sm text-muted-foreground mt-1">Aurangabad, Maharashtra</p>
                  </div>
                  <div className="md:w-2/3">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Key Responsibilities</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>Worked across Production, Quality Control, and Assembly departments gaining comprehensive industrial exposure</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>Gained hands-on experience in mechanical manufacturing processes and quality assurance</span>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-background rounded-full text-sm">Manufacturing</span>
                        <span className="px-3 py-1 bg-background rounded-full text-sm">Quality Control</span>
                        <span className="px-3 py-1 bg-background rounded-full text-sm">Industrial Operations</span>
                        <span className="px-3 py-1 bg-background rounded-full text-sm">Process Optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card relative p-8 animate-slide-up">
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-10 w-6 h-6 rounded-full bg-background-secondary border-4 border-primary"></div>
                
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold">AI & Cloud Intern</h3>
                    <p className="text-muted-foreground">Edunet Foundation</p>
                    <p className="text-sm text-muted-foreground mt-1">Dec 2023 – Jan 2024</p>
                    <p className="text-sm text-muted-foreground mt-1">Remote</p>
                  </div>
                  <div className="md:w-2/3">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Key Responsibilities</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>Completed coursework projects involving data analysis, ML models, and Natural Language Processing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>Worked on data analysis and ML projects while gaining practical experience with AWS and Google Cloud Platform</span>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-background rounded-full text-sm">AWS</span>
                        <span className="px-3 py-1 bg-background rounded-full text-sm">Google Cloud</span>
                        <span className="px-3 py-1 bg-background rounded-full text-sm">AI/ML</span>
                        <span className="px-3 py-1 bg-background rounded-full text-sm">Data Analysis</span>
                      </div>
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
              {/* HealthBot Project */}
              <div className="card-hover rounded-lg p-8 animate-slide-in-left">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-semibold">HealthBot - AI Health Assistant</h3>
                  <a 
                    href="https://github.com/RohitBorde0809/HealthBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center justify-center w-8 h-8 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-200"
                    title="View on GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
        </div>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Developed a MERN stack application for health-related conversations with an AI chatbot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Implemented real-time chat interface with Google Gemini AI and translation to Marathi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Built user authentication, chat history, and responsive design using TypeScript and Chakra UI</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Google Gemini</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">JWT</span>
                </div>
              </div>

              {/* LumioFlow Project */}
              <div className="card-hover rounded-lg p-8 animate-slide-in-right">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-semibold">LumioFlow – Energy Tracking System</h3>
                  <a 
                    href="https://github.com/RohitBorde0809/LumioFlow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center justify-center w-8 h-8 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-200"
                    title="View on GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Connected IoT components and assisted with Arduino coding for real-time energy monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Focused on hardware integration; ensured accurate data collection for the web-based tracking system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Implemented automated alerts and notifications for abnormal power consumption patterns using threshold analysis</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">IoT</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Arduino</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Web Development</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Real-time Monitoring</span>
                </div>
              </div>

              {/* Employee Management System */}
              <div className="card-hover rounded-lg p-8 animate-slide-up">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-semibold">Employee Management System</h3>
                  <a 
                    href="https://github.com/RohitBorde0809/Employee_Management_System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center justify-center w-8 h-8 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-200"
                    title="View on GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  </a>
                </div>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Built an Employee Management System using JDBC and MySQL to manage employee records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Streamlined HR processes with efficient data handling and user-friendly features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Implemented secure authentication and role-based access control</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Java</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">JDBC</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Authentication</span>
                </div>
              </div>

              {/* Crop Disease Prediction */}
              <div className="card-hover rounded-lg p-8 animate-slide-up">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-semibold">Crop Disease Prediction</h3>
                  <a 
                    href="https://github.com/RohitBorde0809/Crop-Disease-Prediction-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center justify-center w-8 h-8 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-200"
                    title="View on GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Developed ML models using TensorFlow and scikit-learn for predicting crop diseases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Enhanced model accuracy through data preprocessing and feature extraction techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Achieved high accuracy in disease prediction to help farmers identify crop issues early</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">scikit-learn</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Computer Vision</span>
                </div>
              </div>

              {/* Baby Nutrition App */}
              <div className="card-hover rounded-lg p-8 animate-slide-up">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-semibold">Baby Nutrition App</h3>
                  <a 
                    href="https://github.com/RohitBorde0809/Baby-Nutrition-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center justify-center w-8 h-8 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-200"
                    title="View on GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
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
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-background-secondary">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Skills & Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6 animate-slide-in-left">
                <h3 className="text-2xl font-semibold mb-6">Programming Languages</h3>
                <div className="space-y-4">
                  {['Python', 'Java', 'MySQL', 'HTML', 'C'].map((skill, index) => (
                    <div key={skill} className="space-y-2">
                      <div className="flex justify-between">
                        <span>{skill}</span>
                        <span className="text-muted-foreground">
                          {['70%', '85%', '80%', '85%', '75%'][index]}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" 
                          style={{ width: ['70%', '85%', '80%', '85%', '75%'][index] }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 animate-slide-in-right">
                <h3 className="text-2xl font-semibold mb-6">Technologies & Tools</h3>
                <div className="space-y-4">
                  {[
                    'Cloud Computing (AWS, GCP)',
                    'JDBC',
                    'Figma',
                    'TensorFlow',
                    'scikit-learn'
                  ].map((skill, index) => (
                    <div key={skill} className="space-y-2">
                      <div className="flex justify-between">
                        <span>{skill}</span>
                        <span className="text-muted-foreground">
                          {['60%', '70%', '90%', '85%', '80%'][index]}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" 
                          style={{ width: ['60%', '70%', '90%', '85%', '80%'][index] }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 animate-slide-up">
                <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'CNC Operating',
                    'VMC Operating',
                    'Quality Testing',
                    'Quality Assurance',
                    'Mechanical Manufacturing'
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 animate-slide-up">
                <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Communication',
                    'Problem Solving',
                    'Debugging',
                    'Teamwork',
                    'Spreadsheet'
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
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
            <p className="text-center text-muted-foreground mb-12">Achievements beyond academics</p>

            <div className="max-w-3xl mx-auto space-y-8">
              {/* Hacknovate Achievement */}
              <div className="glass-card p-8 animate-slide-up">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-semibold">2nd Place at Hacknovate-2k25</h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">2025</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Secured 2nd position at KBPCOES Satara's Hacknovate-2k25 for developing LumioFlow – Smart Energy Monitoring System.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Team Members</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-muted rounded-full text-sm">Rohit Borde</span>
                          <span className="px-3 py-1 bg-muted rounded-full text-sm">Vishal Dhangare</span>
                          <span className="px-3 py-1 bg-muted rounded-full text-sm">Swapnil Salunke</span>
                          <span className="px-3 py-1 bg-muted rounded-full text-sm">Sourabh Ugawekar</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-muted rounded-full text-sm">IoT</span>
                          <span className="px-3 py-1 bg-muted rounded-full text-sm">Hardware Integration</span>
                          <span className="px-3 py-1 bg-muted rounded-full text-sm">Smart Energy</span>
                          <span className="px-3 py-1 bg-muted rounded-full text-sm">Real-time Data</span>
                          <span className="px-3 py-1 bg-muted rounded-full text-sm">Innovation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Art Competition Achievement */}
              <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-semibold">Gold Medalist</h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">2018-19</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Awarded Gold Medal in Rangotsav Celebration Organization for National Level Art Competition, Mumbai-Maharashtra
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">National Level</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Art Competition</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Gold Medal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-background-secondary">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 gradient-text">Get in Touch</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Interested in collaborating or have a project in mind? Let's connect!
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <a 
                  href="https://www.linkedin.com/in/rohit-borde-9b2029221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                
                <a 
                  href="https://github.com/RohitBorde0809"
          target="_blank"
          rel="noopener noreferrer"
                  className="glass-card p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                
                <a 
                  href="https://www.credly.com/users/rohit-borde.6a03d346/edit#credly"
          target="_blank"
          rel="noopener noreferrer"
                  className="glass-card p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span className="text-sm font-medium">Credly</span>
                </a>
                
                <a 
                  href="https://www.cloudskillsboost.google/public_profiles/4026b74b-8a77-439a-97be-c007d0905fa6"
          target="_blank"
          rel="noopener noreferrer"
                  className="glass-card p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018 1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062-2.31 0-4.187 1.956-4.187 4.273 0 2.315 1.877 4.277 4.187 4.277 2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474 0 4.01-2.677 6.86-6.72 6.86z"/>
                  </svg>
                  <span className="text-sm font-medium">Google SkillBuilder</span>
                </a>
              </div>

              <a 
                href="mailto:borderohit02@gmail.com"
                className="button-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Send Email
              </a>
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
