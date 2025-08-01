"use client";

import { useState } from 'react';

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Header with Glass Effect */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-xl border-b border-white/20 dark:border-black/20 shadow-lg">
        <nav className="container h-20 flex items-center justify-between">
          <a href="#" className="text-2xl font-black bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform tracking-tight">
            Rohit Borde
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#about" className="nav-link px-4 py-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium tracking-wide">About</a>
            <a href="#education" className="nav-link px-4 py-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium tracking-wide">Education</a>
            <a href="#experience" className="nav-link px-4 py-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium tracking-wide">Experience</a>
            <a href="#projects" className="nav-link px-4 py-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium tracking-wide">Projects</a>
            <a href="#skills" className="nav-link px-4 py-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium tracking-wide">Skills</a>
            <a href="#certifications" className="nav-link px-4 py-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium tracking-wide">Certifications</a>
            <a href="#contact" className="nav-link px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 ml-2 font-semibold tracking-wide">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-white/20 dark:border-black/20 shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="container py-6 space-y-4">
            <a 
              href="#about" 
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium tracking-wide text-lg"
            >
              About
            </a>
            <a 
              href="#education" 
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium tracking-wide text-lg"
            >
              Education
            </a>
            <a 
              href="#experience" 
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium tracking-wide text-lg"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium tracking-wide text-lg"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium tracking-wide text-lg"
            >
              Skills
            </a>
            <a 
              href="#certifications" 
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium tracking-wide text-lg"
            >
              Certifications
            </a>
            <a 
              href="#contact" 
              onClick={closeMobileMenu}
              className="block px-4 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 font-semibold tracking-wide text-lg text-center mt-4"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-background via-background-secondary to-background relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl animate-spin-slow"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="mb-8 inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium backdrop-blur-sm">
                  👋 Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in leading-none tracking-tight">
                Rohit Borde
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl mb-8 text-muted-foreground animate-slide-in-up font-light tracking-wide">
                Computer Engineering Student & 
                <span className="text-primary font-semibold"> ML Enthusiast</span>
              </p>
              <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-muted-foreground animate-slide-in-up leading-relaxed font-light tracking-wide">
                Proactive Computer Engineering student with experience in software, hardware, IoT, and industrial operations. 
                Skilled in Python, cloud computing (AWS, GCP), and embedded systems, applying IT to enhance manufacturing efficiency and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-up">
                <a 
                  href="#projects" 
                  className="group px-10 py-5 bg-gradient-to-r from-primary to-blue-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-semibold text-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    View My Work
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="#contact" 
                  className="group px-10 py-5 border-2 border-primary/30 text-primary rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-semibold text-lg backdrop-blur-sm"
                >
                  <span className="flex items-center justify-center gap-2">
                    Get In Touch
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slide-in-left">
                <div className="space-y-6">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    I am a proactive Computer Engineering student at Deogiri Institute Of Engineering & Management Studies, 
                    with hands-on experience in software, hardware, IoT, and industrial operations.
                  </p>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    My journey in technology spans from developing machine learning models for plant disease prediction 
                    to working in manufacturing environments, gaining practical experience in CNC operations and quality control.
                  </p>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    I'm passionate about applying IT solutions to enhance manufacturing efficiency and automation, 
                    combining my technical skills in Python, cloud computing, and embedded systems.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <span className="px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border border-primary/20 rounded-full font-medium">🎯 Problem Solver</span>
                  <span className="px-6 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 border border-green-500/20 rounded-full font-medium">🚀 Innovator</span>
                  <span className="px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-500/20 rounded-full font-medium">💡 Creator</span>
                </div>
              </div>
              <div className="glass-card p-10 animate-slide-in-right border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Quick Facts</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-blue-500/5 border border-primary/10 hover:border-primary/20 transition-all duration-200">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-white text-xl font-bold">🎓</div>
                    <span className="text-lg font-medium">Computer Engineering Student</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 border border-green-500/10 hover:border-green-500/20 transition-all duration-200">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white text-xl font-bold">🤖</div>
                    <span className="text-lg font-medium">Machine Learning Specialist</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-500/5 to-red-500/5 border border-orange-500/10 hover:border-orange-500/20 transition-all duration-200">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white text-xl font-bold">🏭</div>
                    <span className="text-lg font-medium">Industrial Operations Experience</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/10 hover:border-blue-500/20 transition-all duration-200">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white text-xl font-bold">☁️</div>
                    <span className="text-lg font-medium">Cloud Computing Practitioner</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-200">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white text-xl font-bold">🔧</div>
                    <span className="text-lg font-medium">IoT & Embedded Systems</span>
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
                    <h3 className="text-2xl font-semibold mb-2">B.Tech in Computer Science & Engineering</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Deogiri Institute Of Engineering & Management Studies
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span>📅 Aug 2022 - Pursuing</span>
                      <span>📍 Aurangabad, Maharashtra</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Pursuing comprehensive Computer Engineering education with focus on software development, 
                      hardware systems, IoT applications, and industrial automation technologies.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Machine Learning</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">IoT Systems</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Cloud Computing</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Industrial Automation</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8 animate-slide-in-up mt-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">Higher Secondary Certificate (HSC)</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Vivekanand Arts, Sardar Dalipsingh Commerce and Science College
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span>📅 June 2021 - July 2022</span>
                      <span>📊 76%</span>
                      <span>🔬 Science Stream</span>
                      <span>📍 Aurangabad, Maharashtra</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8 animate-slide-in-up mt-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏫</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">Secondary School Certificate (SSC)</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Raja Shivaji High School
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span>📅 June 2019 - July 2020</span>
                      <span>📊 86.20%</span>
                      <span>⚙️ Vocational - Mechanical Technical</span>
                      <span>📍 Aurangabad</span>
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
              <div className="glass-card p-8 animate-slide-in-left">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">Machine Learning Intern</h3>
                    <p className="text-lg text-muted-foreground mb-4">Sudarshan Arial Solution</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span>📅 Sep 2024 - Dec 2024</span>
                      <span>📍 Aurangabad, Maharashtra</span>
                      <span>🏢 Remote</span>
                    </div>
                    <ul className="space-y-3 text-muted-foreground mb-6">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Developed ML models for plant disease prediction using Python, TensorFlow, and scikit-learn</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Leveraged Kaggle datasets for training and conducted data preprocessing to enhance model accuracy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Achieved 80% accuracy rate in disease prediction models</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">TensorFlow</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">scikit-learn</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Kaggle</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 animate-slide-in-right">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">Tech Intern</h3>
                    <p className="text-lg text-muted-foreground mb-4">Laxmi Agni Components & Forgings Pvt Ltd</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span>📅 Feb 2024 - Oct 2024</span>
                      <span>📍 Aurangabad, Maharashtra</span>
                      <span>🏢 On-site</span>
                    </div>
                    <ul className="space-y-3 text-muted-foreground mb-6">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Worked across Production, Quality Control, and Assembly departments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Gained hands-on experience in mechanical manufacturing processes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Developed expertise in CNC operations, VMC operations, and quality assurance</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">CNC Operating</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">VMC Operating</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Quality Control</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Manufacturing</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 animate-slide-in-left">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">AI & Cloud Intern</h3>
                    <p className="text-lg text-muted-foreground mb-4">Edunet Foundation</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span>📅 Dec 2023 - Jan 2024</span>
                      <span>🏢 Remote</span>
                    </div>
                    <ul className="space-y-3 text-muted-foreground mb-6">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Completed coursework projects involving data analysis, ML models, and NLP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Worked on data analysis and ML projects using AWS and Google Cloud Platform</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">AWS</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Google Cloud</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">Data Analysis</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">NLP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 bg-gradient-to-br from-background via-background-secondary to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
          </div>
          
          <div className="container relative">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent tracking-tight">Featured Projects</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full mb-8"></div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
                4+ innovative projects spanning IoT, machine learning, web development, and UI/UX design
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12">
              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-primary/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-3xl hover:shadow-primary/20 animate-scale-in">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                        ⚡
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">LumioFlow - Energy Tracking System</h3>
                    </div>
                    <a 
                      href="https://github.com/RohitBorde0809/LumioFlow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-primary hover:to-blue-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="View LumioFlow project on GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                  <ul className="space-y-4 text-muted-foreground mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-blue-600 mt-2 flex-shrink-0"></div>
                      <span className="text-lg">Connected IoT components and assisted with Arduino coding for real-time energy monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-blue-600 mt-2 flex-shrink-0"></div>
                      <span className="text-lg">Focused on hardware integration; ensured accurate data collection for the web-based tracking system</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border border-primary/20 rounded-full text-sm font-medium">IoT</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 border border-green-500/20 rounded-full text-sm font-medium">Arduino</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 text-orange-600 border border-orange-500/20 rounded-full text-sm font-medium">Energy Monitoring</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-500/20 rounded-full text-sm font-medium">Web Development</span>
                  </div>
                </div>
              </div>

              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-primary/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-green-500/10 animate-slide-in-right">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white text-xl font-bold">
                        🌱
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-green-600 transition-colors">Plant Disease Prediction</h3>
                    </div>
                    <a 
                      href="https://github.com/RohitBorde0809/Crop-Disease-Prediction-"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-green-500 hover:to-emerald-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="View Plant Disease Prediction project on GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                  <ul className="space-y-4 text-muted-foreground mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mt-2 flex-shrink-0"></div>
                      <span className="text-lg">Developed ML models using TensorFlow and scikit-learn for predicting plant diseases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mt-2 flex-shrink-0"></div>
                      <span className="text-lg">Enhanced model accuracy through data preprocessing and feature extraction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mt-2 flex-shrink-0"></div>
                      <span className="text-lg">Achieved 80% accuracy rate in disease prediction</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 border border-green-500/20 rounded-full text-sm font-medium">Python</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 border border-orange-500/20 rounded-full text-sm font-medium">TensorFlow</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 border border-blue-500/20 rounded-full text-sm font-medium">scikit-learn</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-500/20 rounded-full text-sm font-medium">Kaggle</span>
                  </div>
                </div>
              </div>

              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-primary/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 animate-slide-in-left">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white text-xl font-bold">
                        👥
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-orange-600 transition-colors">Employee Management System</h3>
                    </div>
                    <a 
                      href="https://github.com/RohitBorde0809/Employee_Management_System"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-orange-500 hover:to-red-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="View Employee Management System project on GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                  <ul className="space-y-4 text-muted-foreground mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 mt-2 flex-shrink-0"></div>
                      <span className="text-lg">Built an Employee Management System using JDBC and MySQL to manage employee records</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 mt-2 flex-shrink-0"></div>
                      <span className="text-lg">Streamlined HR processes with efficient data handling and user-friendly features</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-600 border border-red-500/20 rounded-full text-sm font-medium">Java</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 border border-blue-500/20 rounded-full text-sm font-medium">JDBC</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-600/10 to-yellow-500/10 text-orange-600 border border-orange-600/20 rounded-full text-sm font-medium">MySQL</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-gray-500/10 to-gray-600/10 text-gray-600 border border-gray-500/20 rounded-full text-sm font-medium">Database</span>
                  </div>
                </div>
              </div>

              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-primary/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 animate-slide-in-right">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white text-xl font-bold">
                        👶
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-purple-600 transition-colors">Baby Nutrition App</h3>
                    </div>
                    <a 
                      href="https://github.com/RohitBorde0809/BabyNutritionApp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-purple-500 hover:to-pink-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="View Baby Nutrition App project on GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                  <ul className="space-y-4 text-muted-foreground mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mt-2 flex-shrink-0"></div>
                      <span className="text-lg">Designed the user interface using Figma, focusing on intuitive design and user experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mt-2 flex-shrink-0"></div>
                      <span className="text-lg">Collaborated with developers to ensure alignment between UI design and functionality</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-500/20 rounded-full text-sm font-medium">Figma</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 border border-blue-500/20 rounded-full text-sm font-medium">UI/UX Design</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 border border-green-500/20 rounded-full text-sm font-medium">Prototyping</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-pink-500/10 to-rose-500/10 text-pink-600 border border-pink-500/20 rounded-full text-sm font-medium">User Experience</span>
                  </div>
                </div>
              </div>

              {/* Hidden Projects */}
              <div className={`hidden-project ${showAllProjects ? 'block' : 'hidden'} group relative p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-indigo-500/40 transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 shadow-xl hover:shadow-3xl hover:shadow-indigo-500/20`}>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-500">
                        💼
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black group-hover:text-indigo-600 transition-colors tracking-tight">Portfolio Website</h3>
                    </div>
                    <a 
                      href="https://github.com/RohitBorde0809/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-indigo-500 hover:to-purple-600 text-white rounded-3xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="View Portfolio project on GitHub"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                  <ul className="space-y-5 text-muted-foreground mb-10">
                    <li className="flex items-start gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mt-2.5 flex-shrink-0"></div>
                      <span className="text-lg font-light leading-relaxed">Modern and responsive portfolio website built with Next.js for optimal performance, SEO optimization, and smooth animations</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mt-2.5 flex-shrink-0"></div>
                      <span className="text-lg font-light leading-relaxed">Continuously updated with new projects and achievements, featuring interactive UI elements and professional design</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 border border-indigo-500/20 rounded-full text-sm font-medium tracking-wide">Next.js</span>
                    <span className="px-5 py-2.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 border border-blue-500/20 rounded-full text-sm font-medium tracking-wide">React</span>
                    <span className="px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 border border-cyan-500/20 rounded-full text-sm font-medium tracking-wide">Tailwind CSS</span>
                    <span className="px-5 py-2.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-500/20 rounded-full text-sm font-medium tracking-wide">TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* View More Projects Button */}
            <div className="text-center mt-16">
              <button 
                className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 animate-bounce-in"
                onClick={() => setShowAllProjects(!showAllProjects)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                <span className="relative z-10">
                  {showAllProjects ? 'Show Less' : 'View All Projects'}
                </span>
                <svg className="relative z-10 w-5 h-5 ml-2 inline-block group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Skills & Expertise</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 animate-slide-in-left border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Programming Languages</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/5 to-blue-500/5 border border-primary/10 hover:border-primary/20 transition-all duration-200">
                    <span className="text-lg font-medium">Python</span>
                    <div className="w-40 bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-primary to-blue-600 h-3 rounded-full shadow-lg" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 border border-green-500/10 hover:border-green-500/20 transition-all duration-200">
                    <span className="text-lg font-medium">C</span>
                    <div className="w-40 bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full shadow-lg" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/10 hover:border-blue-500/20 transition-all duration-200">
                    <span className="text-lg font-medium">MySQL</span>
                    <div className="w-40 bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-3 rounded-full shadow-lg" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-orange-500/5 to-red-500/5 border border-orange-500/10 hover:border-orange-500/20 transition-all duration-200">
                    <span className="text-lg font-medium">HTML</span>
                    <div className="w-40 bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-orange-500 to-red-600 h-3 rounded-full shadow-lg" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-200">
                    <span className="text-lg font-medium">PHP</span>
                    <div className="w-40 bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full shadow-lg" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 border border-indigo-500/10 hover:border-indigo-500/20 transition-all duration-200">
                    <span className="text-lg font-medium">Data Structure</span>
                    <div className="w-40 bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full shadow-lg" style={{width: '78%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 animate-slide-in-right border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Libraries & Technologies</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-orange-500/5 to-red-500/5 border border-orange-500/10 hover:border-orange-500/20 transition-all duration-200">
                    <span className="text-lg font-medium">TensorFlow</span>
                    <div className="w-40 bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-orange-500 to-red-600 h-3 rounded-full shadow-lg" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/10 hover:border-blue-500/20 transition-all duration-200">
                    <span className="text-lg font-medium">scikit-learn</span>
                    <div className="w-40 bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-3 rounded-full shadow-lg" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-200">
                    <span className="text-lg font-medium">Matplotlib</span>
                    <div className="w-40 bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full shadow-lg" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 border border-green-500/10 hover:border-green-500/20 transition-all duration-200">
                    <span className="text-lg font-medium">Cloud Computing (AWS, GCP)</span>
                    <div className="w-40 bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full shadow-lg" style={{width: '78%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-indigo-500/5 to-blue-500/5 border border-indigo-500/10 hover:border-indigo-500/20 transition-all duration-200">
                    <span className="text-lg font-medium">JDBC</span>
                    <div className="w-40 bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 h-3 rounded-full shadow-lg" style={{width: '76%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-pink-500/5 to-rose-500/5 border border-pink-500/10 hover:border-pink-500/20 transition-all duration-200">
                    <span className="text-lg font-medium">Figma</span>
                    <div className="w-40 bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-pink-500 to-rose-600 h-3 rounded-full shadow-lg" style={{width: '82%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-violet-500/5 to-purple-500/5 border border-violet-500/10 hover:border-violet-500/20 transition-all duration-200">
                    <span className="text-lg font-medium">Kaggle</span>
                    <div className="w-40 bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-violet-500 to-purple-600 h-3 rounded-full shadow-lg" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 animate-slide-in-left border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Technical Skills</h3>
                <div className="flex flex-wrap gap-4">
                  <span className="px-6 py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 border border-orange-500/20 rounded-full font-medium hover:scale-105 transition-transform">CNC Operating</span>
                  <span className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 border border-blue-500/20 rounded-full font-medium hover:scale-105 transition-transform">VMC Operating</span>
                  <span className="px-6 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 border border-green-500/20 rounded-full font-medium hover:scale-105 transition-transform">Quality Testing</span>
                  <span className="px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-500/20 rounded-full font-medium hover:scale-105 transition-transform">Quality Assurance</span>
                  <span className="px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 border border-indigo-500/20 rounded-full font-medium hover:scale-105 transition-transform">IoT Development</span>
                  <span className="px-6 py-3 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 text-teal-600 border border-teal-500/20 rounded-full font-medium hover:scale-105 transition-transform">Arduino Programming</span>
                </div>
              </div>

              <div className="glass-card p-8 animate-slide-in-right border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Soft Skills</h3>
                <div className="flex flex-wrap gap-4">
                  <span className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 border border-blue-500/20 rounded-full font-medium hover:scale-105 transition-transform">Communication</span>
                  <span className="px-6 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 border border-green-500/20 rounded-full font-medium hover:scale-105 transition-transform">Spreadsheet</span>
                  <span className="px-6 py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 border border-orange-500/20 rounded-full font-medium hover:scale-105 transition-transform">Problem Solving</span>
                  <span className="px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-500/20 rounded-full font-medium hover:scale-105 transition-transform">Debugging</span>
                  <span className="px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 border border-indigo-500/20 rounded-full font-medium hover:scale-105 transition-transform">Teamwork</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-32 bg-gradient-to-br from-background-secondary via-background to-background-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl animate-spin-slow"></div>
          </div>
          
          <div className="container relative">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent tracking-tight">Certifications & Courses</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full mb-8"></div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
                8+ professional certifications across cloud computing, machine learning, and cybersecurity
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12">
              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-red-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-red-500/10 animate-slide-in-left">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center text-white text-xl font-bold">
                        🛡️
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-red-600 transition-colors">Certified Network Security Practitioner (CNSP)</h3>
                        <p className="text-muted-foreground">The SecOps Group • June 27, 2025</p>
                      </div>
                    </div>
                    <a 
                      href="https://drive.google.com/file/d/1A98g76vVbMahrGPFOBuTO6bwykgVullw/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-red-500 hover:to-orange-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="View CNSP certificate"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-600 mt-2 flex-shrink-0"></div>
                      <span>Successfully passed the CNSP exam strengthening understanding of network security principles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-600 mt-2 flex-shrink-0"></div>
                      <span>Certificate ID: 10167308</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-600 mt-2 flex-shrink-0"></div>
                      <span>Advanced knowledge in network security practices and real-world implementation</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-600 border border-red-500/20 rounded-full text-sm font-medium">Network Security</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-500/20 rounded-full text-sm font-medium">Cybersecurity</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 border border-blue-500/20 rounded-full text-sm font-medium">SecOps</span>
                  </div>
                </div>
              </div>

              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-primary/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-primary/10 animate-slide-in-right">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                        ☁️
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Google Cloud - Cloud Engineer Track</h3>
                        <p className="text-muted-foreground">Google Cloud • July 22, 2024</p>
                      </div>
                    </div>
                    <a 
                      href="https://drive.google.com/file/d/1A98g76vVbMahrGPFOBuTO6bwykgVullw/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-primary hover:to-blue-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="View Google Cloud Engineer certificate"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-blue-600 mt-2 flex-shrink-0"></div>
                      <span>Completed a specialized online Cloud Engineer Track in Google Cloud SkillBuild program</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-blue-600 mt-2 flex-shrink-0"></div>
                      <span>Learn Associate Cloud Engineer deploys and secures applications, services, and infrastructure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-blue-600 mt-2 flex-shrink-0"></div>
                      <span>Performs common platform-based tasks using Google-managed or self-managed services on Google Cloud</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border border-primary/20 rounded-full text-sm font-medium">Google Cloud</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 border border-green-500/20 rounded-full text-sm font-medium">Cloud Engineering</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-500/20 rounded-full text-sm font-medium">Infrastructure</span>
                  </div>
                </div>
              </div>

              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-orange-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 animate-slide-in-left">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-600 flex items-center justify-center text-white text-xl font-bold">
                        ☁️
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-orange-600 transition-colors">AWS Academy Cloud Foundations</h3>
                        <p className="text-muted-foreground">AWS Academy • July 09, 2024</p>
                      </div>
                    </div>
                    <a 
                      href="https://www.credly.com/badges/0f05c319-e440-48c1-8c3e-9997afa4c845/public_url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-orange-500 hover:to-yellow-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="View AWS Academy certificate"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-600 mt-2 flex-shrink-0"></div>
                      <span>Learn what cloud computing is and its fundamental concepts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-600 mt-2 flex-shrink-0"></div>
                      <span>Gain insights into AWS offerings related to computing, storage, databases, and more</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-600 mt-2 flex-shrink-0"></div>
                      <span>Understand the advantages of cloud computing, including scalability, flexibility, and cost-effectiveness</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 text-orange-600 border border-orange-500/20 rounded-full text-sm font-medium">AWS</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 border border-blue-500/20 rounded-full text-sm font-medium">Cloud Computing</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 border border-green-500/20 rounded-full text-sm font-medium">Foundations</span>
                  </div>
                </div>
              </div>

              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 animate-slide-in-right">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white text-xl font-bold">
                        📚
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">AWS Academy Introduction to Cloud Semester 1</h3>
                        <p className="text-muted-foreground">AWS Academy • July 08, 2024</p>
                      </div>
                    </div>
                    <a 
                      href="https://www.credly.com/badges/722fe007-1a15-4ba2-a898-00d343deaefd/public_url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-blue-500 hover:to-cyan-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="View AWS Academy Introduction certificate"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 mt-2 flex-shrink-0"></div>
                      <span>Learn what cloud computing is and its fundamental concepts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 mt-2 flex-shrink-0"></div>
                      <span>Learn about secure delivery mechanisms within AWS</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 border border-blue-500/20 rounded-full text-sm font-medium">AWS</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 border border-green-500/20 rounded-full text-sm font-medium">Security</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-500/20 rounded-full text-sm font-medium">Introduction</span>
                  </div>
                </div>
              </div>

              
              {/* Hidden Certificates */}
              {showAllCertificates && (
                <><div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-indigo-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 animate-slide-in-left">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                        🤖
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-indigo-600 transition-colors">Machine Learning for Data Science Projects</h3>
                        <p className="text-muted-foreground">IBM • Jan 13, 2024</p>
                      </div>
                    </div>
                    <a 
                      href="https://www.credly.com/badges/4820d6a8-d2f8-42ef-9db3-63c1357c9d51/public_url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-indigo-500 hover:to-purple-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="View IBM ML certificate"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mt-2 flex-shrink-0"></div>
                      <span>Learn how to create effective data models</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mt-2 flex-shrink-0"></div>
                      <span>Dive into ML algorithms and principles</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 border border-indigo-500/20 rounded-full text-sm font-medium">Machine Learning</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 border border-blue-500/20 rounded-full text-sm font-medium">Data Science</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 border border-green-500/20 rounded-full text-sm font-medium">IBM</span>
                  </div>
                </div>
              </div>

              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-emerald-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 animate-slide-in-right">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white text-xl font-bold">
                        📊
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-emerald-600 transition-colors">Getting Started with Enterprise Data Science</h3>
                        <p className="text-muted-foreground">IBM • Dec 28, 2023</p>
                      </div>
                    </div>
                    <a 
                      href="https://www.credly.com/badges/45e4d893-d69e-40fb-9ed8-3837d39c48a7/public_url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-emerald-500 hover:to-teal-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="View IBM Data Science certificate"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 mt-2 flex-shrink-0"></div>
                      <span>Explore data science team roles and responsibilities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 mt-2 flex-shrink-0"></div>
                      <span>Learn about real-world use cases for data science methods</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 mt-2 flex-shrink-0"></div>
                      <span>Understand essential data analysis tools</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-600 border border-emerald-500/20 rounded-full text-sm font-medium">Data Science</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 border border-blue-500/20 rounded-full text-sm font-medium">Enterprise</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-500/20 rounded-full text-sm font-medium">IBM</span>
                  </div>
                </div>
              </div>

              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-orange-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 animate-slide-in-left">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-600 flex items-center justify-center text-white text-xl font-bold">
                        ☁️
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-orange-600 transition-colors">AWS Educate Machine Learning Foundations</h3>
                        <p className="text-muted-foreground">Amazon Web Services (AWS) • June 2025</p>
                      </div>
                    </div>
                    <a 
                      href="https://drive.google.com/file/d/1A98g76vVbMahrGPFOBuTO6bwykgVullw/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-orange-500 hover:to-yellow-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="View AWS Educate Machine Learning certificate"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-600 mt-2 flex-shrink-0"></div>
                      <span>Completed AWS Educate Machine Learning Foundations certification program</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-600 mt-2 flex-shrink-0"></div>
                      <span>Credential ID: 4bd33531-eb41-4ed0-9dc0-8990da2828e4</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-600 mt-2 flex-shrink-0"></div>
                      <span>Gained foundational knowledge in machine learning concepts and AWS cloud services</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 text-orange-600 border border-orange-500/20 rounded-full text-sm font-medium">AWS Cloud</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 border border-blue-500/20 rounded-full text-sm font-medium">Machine Learning</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 border border-green-500/20 rounded-full text-sm font-medium">Foundations</span>
                  </div>
                </div>
              </div>

              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-red-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-red-500/10 animate-slide-in-right">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center text-white text-xl font-bold">
                        🔒
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-red-600 transition-colors">Cybersecurity Certification</h3>
                        <p className="text-muted-foreground">Google Cloud • July 25, 2024</p>
                      </div>
                    </div>
                    <a 
                      href="https://www.credly.com/badges/42e8ce36-a775-462d-baef-f0ea685978dc/public_url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-red-500 hover:to-orange-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="View Cybersecurity certificate"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-600 mt-2 flex-shrink-0"></div>
                      <span>Builds on foundational knowledge of cybersecurity fundamentals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-600 mt-2 flex-shrink-0"></div>
                      <span>Work with Google Cloud tools like Security Command Center, Compute Engine, IAM, and more</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-600 mt-2 flex-shrink-0"></div>
                      <span>Gain practical skills in cloud security principles, risk management, compliance, incident response, and recovery</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-600 border border-red-500/20 rounded-full text-sm font-medium">Cybersecurity</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 text-orange-600 border border-orange-500/20 rounded-full text-sm font-medium">Risk Management</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-500/20 rounded-full text-sm font-medium">Compliance</span>
                  </div>
                </div>
              </div>
                </>
              )}
            </div>
            
            {/* View More Button */}
            <div className="text-center mt-16">
              <button 
                className="group relative px-12 py-4 bg-gradient-to-r from-primary via-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 animate-glow-pulse"
                onClick={() => setShowAllCertificates(!showAllCertificates)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                <span className="relative z-10">
                  {showAllCertificates ? 'Show Less' : 'View All Certificates'}
                </span>
                <svg className="relative z-10 w-5 h-5 ml-2 inline-block group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* Extra-Curricular Achievement */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">Extra-Curricular Achievements</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-yellow-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/10">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                      🏆
                    </div>
                    <h4 className="text-2xl font-bold mb-4 group-hover:text-yellow-600 transition-colors">Gold Medalist - Rangotsav Celebration</h4>
                    <p className="text-lg text-muted-foreground mb-4">National Level Art Competition</p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-600 border border-yellow-500/20 rounded-full font-medium">
                      <span>📍 Mumbai, Maharashtra</span>
                      <span>•</span>
                      <span>📅 2018-19</span>
                    </div>
                  </div>
                </div>

                <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                      🥈
                    </div>
                    <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">2nd Place - Hacknovate-2k25</h4>
                    <p className="text-lg text-muted-foreground mb-4">LumioFlow - Smart Energy Monitoring System</p>
                    <ul className="space-y-2 text-muted-foreground mb-6 text-left">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">🔧</span>
                        <span>Hardware setup and IoT component connections</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">⚡</span>
                        <span>Real-time electricity usage tracking system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500">👥</span>
                        <span>Team collaboration with Vishal, Swapnil, and Sourabh</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 border border-blue-500/20 rounded-full text-sm font-medium">IoT</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 border border-green-500/20 rounded-full text-sm font-medium">Hardware</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 border border-orange-500/20 rounded-full text-sm font-medium">Innovation</span>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 border border-blue-500/20 rounded-full font-medium">
                      <span>📍 KBPCOES Satara</span>
                      <span>•</span>
                      <span>📅 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-purple-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Let's Connect</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                  or simply chat about technology. Feel free to reach out!
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <a 
                  href="mailto:borderohit02@gmail.com"
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-primary/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">Email</h3>
                    <p className="text-muted-foreground text-lg">borderohit02@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/rohitborde0809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-blue-600/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">LinkedIn</h3>
                    <p className="text-muted-foreground text-lg">linkedin.com/in/rohitborde0809</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/RohitBorde0809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-gray-600/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-gray-500/10"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-500/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-gray-700 transition-colors">GitHub</h3>
                    <p className="text-muted-foreground text-lg">github.com/RohitBorde0809</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+919960728159"
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-green-600/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-green-600 transition-colors">Phone</h3>
                    <p className="text-muted-foreground text-lg">+91 99607 28159</p>
                  </div>
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="mailto:borderohit02@gmail.com" 
                  className="group px-12 py-5 bg-gradient-to-r from-primary to-blue-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-semibold text-lg"
                >
                  <span className="flex items-center justify-center gap-3">
                    Send Message
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="/Rohit Borde Resume.docx" 
                  target="_blank"
                  className="group px-12 py-5 border-2 border-primary/30 text-primary rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-semibold text-lg backdrop-blur-sm"
                >
                  <span className="flex items-center justify-center gap-3">
                    Download Resume
                    <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-gradient-to-r from-background via-background-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5"></div>
        <div className="container relative">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
                Rohit Borde
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Building the future through code, one project at a time.
              </p>
            </div>
            
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href="https://www.linkedin.com/in/rohitborde0809"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/RohitBorde0809"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="mailto:borderohit02@gmail.com"
                className="w-12 h-12 bg-gradient-to-r from-primary to-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            
            <div className="border-t border-white/10 pt-8">
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} Rohit Borde. All rights reserved. | Built with ❤️ using Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}