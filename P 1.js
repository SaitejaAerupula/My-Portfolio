
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Calendar, Award, Code, Briefcase, GraduationCap, User } from "lucide-react";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    technical: ["Python", "Java", "C", "HTML/CSS", "JavaScript", "MySQL", "Git", "VS Code", "Eclipse"],
    frameworks: ["Object Oriented Programming", "DSA", "Web Development", "Database Management"],
    strengths: ["Problem-Solving", "Team Collaboration", "Leadership", "Time Management", "Communication"]
  };

  const projects = [
    {
      title: "Weather Prediction Site",
      description: "User-friendly weather application using HTML/CSS/JS with real-time data integration",
      features: ["OpenWeatherMap API integration", "Location-based updates", "Temperature & weather condition display", "Enhanced UI/UX"],
      tech: ["HTML", "CSS", "JavaScript", "API Integration"]
    },
    {
      title: "Chatbot Application",
      description: "Interactive chatbot using Python with core NLP techniques",
      features: ["NLTK for text preprocessing", "Simple user interface", "Real-time conversation", "Python-based AI development"],
      tech: ["Python", "NLP", "NLTK", "UI Design"]
    }
  ];

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/saiteja-a-29a327277', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            {/* Profile Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 p-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                  <img 
                    src="/lovable-uploads/b17865bc-fd79-492e-9b61-d90c09d3fc0e.png" 
                    alt="Saiteja Aerupula"
                    className="w-full h-full object-cover rounded-full bg-white"
                  />
                </div>
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-cyan-400/30 animate-pulse"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              SAITEJA AERUPULA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">Computer Science & Engineering Student</p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Enthusiastic and motivated student with a strong foundation in programming, software development, and 
              problem-solving. Eager to apply technical skills and passion for technology to contribute to innovative projects.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Mail size={20} />
              <span>aerupulasaiteja@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Phone size={20} />
              <span>7569816083</span>
            </div>
            <div 
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={handleLinkedInClick}
            >
              <Linkedin size={20} />
              <span>saiteja aerupula</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Mail className="mr-2" size={18} />
              Contact Me
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <ExternalLink className="mr-2" size={18} />
              View Projects
            </Button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Education Section */}
            <Card className={`bg-white/5 backdrop-blur-sm border-white/10 transition-all duration-1000 delay-200 hover:bg-white/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <GraduationCap className="text-blue-400" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="border-l-2 border-blue-400 pl-4">
                  <h3 className="font-semibold text-white">Bachelor of Technology - Computer Science and Engineering</h3>
                  <p className="text-blue-400">St.Peters Engineering College Hyderabad</p>
                  <p className="text-sm">CGPA: 8.60 till 3-I (2022-2026)</p>
                </div>
                <div className="border-l-2 border-purple-400 pl-4">
                  <h3 className="font-semibold text-white">Intermediate</h3>
                  <p className="text-purple-400">Sri Chaitanya Junior College</p>
                  <p className="text-sm">CGPA: 8.4 | 2022</p>
                </div>
                <div className="border-l-2 border-cyan-400 pl-4">
                  <h3 className="font-semibold text-white">SSC</h3>
                  <p className="text-cyan-400">Sri Vivekananda High School</p>
                  <p className="text-sm">CGPA: 10.0 | 2020</p>
                </div>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card className={`bg-white/5 backdrop-blur-sm border-white/10 transition-all duration-1000 delay-400 hover:bg-white/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Code className="text-green-400" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-3">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill, index) => (
                      <Badge 
                        key={index} 
                        className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3">Frameworks & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill, index) => (
                      <Badge 
                        key={index} 
                        className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3">Key Strengths</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.strengths.map((skill, index) => (
                      <Badge 
                        key={index} 
                        className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Projects Section */}
            <Card className={`bg-white/5 backdrop-blur-sm border-white/10 transition-all duration-1000 delay-300 hover:bg-white/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Code className="text-orange-400" />
                  Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="border border-white/10 rounded-lg p-4 hover:border-white/20 transition-colors">
                    <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-3">{project.description}</p>
                    <div className="space-y-2 mb-4">
                      {project.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, tIndex) => (
                        <Badge 
                          key={tIndex} 
                          className="bg-orange-500/20 text-orange-300 border-orange-500/30 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Professional Experience */}
            <Card className={`bg-white/5 backdrop-blur-sm border-white/10 transition-all duration-1000 delay-500 hover:bg-white/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Briefcase className="text-green-400" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <div className="border-l-2 border-green-400 pl-4">
                  <h3 className="font-semibold text-white">Frontend Developer Intern</h3>
                  <p className="text-green-400 mb-2">Coursera - Analog Projects (Remote) | Feb2025 - June 2025</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Developed and maintained user interface for book recommendation blog using HTML, CSS, and JavaScript</li>
                    <li>• Collaborated with backend developers and designers to create responsive and visually appealing website</li>
                    <li>• Gained hands-on experience with version control (Git) and agile development practices</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className={`bg-white/5 backdrop-blur-sm border-white/10 transition-all duration-1000 delay-600 hover:bg-white/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="text-yellow-400" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <div className="flex items-start gap-3">
                  <Award size={16} className="text-yellow-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Certified System Administrator - ServiceNow</p>
                    <p className="text-sm text-gray-400">June 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award size={16} className="text-yellow-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Google Cloud Computing Foundations</p>
                    <p className="text-sm text-gray-400">Google, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award size={16} className="text-yellow-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Cyber Security - Google</p>
                    <p className="text-sm text-gray-400">2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award size={16} className="text-yellow-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Data Structures and Algorithms with Java</p>
                    <p className="text-sm text-gray-400">Infosys Springboard, 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h2>
            <p className="text-gray-300 mb-6">Let's build something amazing together!</p>
            <div className="flex justify-center gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;