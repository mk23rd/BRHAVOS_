import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChefHat,
  Users,
  Lightbulb,
  Megaphone,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Instagram,
  Star,
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-soft' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <img src="/photo_5848411509489339953_x.jpg" alt="BRAVOHS" className="h-12 w-auto" />
              <span className={`font-serif font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-navy-700' : 'text-white drop-shadow-lg'}`}>
                BRAVOHS
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="nav-link text-sm font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="nav-link text-sm font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="nav-link text-sm font-medium">
                Projects
              </button>
              <button onClick={() => scrollToSection('why-us')} className="nav-link text-sm font-medium">
                Why Us
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary text-sm">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-gray-200 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-navy-700 rounded-b-lg py-4 space-y-3">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-white hover:bg-navy-600 rounded transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-white hover:bg-navy-600 rounded transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 text-white hover:bg-navy-600 rounded transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('why-us')} className="block w-full text-left px-4 py-2 text-white hover:bg-navy-600 rounded transition-colors">
                Why Us
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-white hover:bg-navy-600 rounded transition-colors">
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-navy-700 via-navy-600 to-navy-800 text-white pt-20 flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-600 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="mb-8 flex items-center justify-center md:justify-start">
                <img src="/photo_5848411509489339953_x.jpg" alt="BRAVOHS" className="h-32 w-auto" />
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                Transforming Hospitality Businesses
              </h1>
              <p className="text-xl text-gray-100 mb-4">Through Excellence, Innovation & Customer-Focused Solutions</p>
              <p className="text-lg text-gold-200 mb-8 font-medium">
                Hospitality Consulting • Startup Organization • Recruitment & Training • Social Media Marketing
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contact')} className="btn-primary bg-gold-500 hover:bg-gold-600 text-navy-700">
                  Book a Consultation
                </button>
                <button onClick={() => scrollToSection('contact')} className="btn-secondary border-white text-white hover:bg-white hover:text-navy-700">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="hidden md:block animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-500 rounded-2xl blur-2xl opacity-20" />
                <div className="relative bg-gradient-to-br from-gold-100 to-gold-50 rounded-2xl p-8 shadow-soft-xl">
                  <div className="aspect-square bg-gradient-to-br from-navy-200 to-navy-300 rounded-xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Hospitality"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-soft-xl">
                <img
                  src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Mekuria Habte"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="divider mb-4" />
              <h2 className="section-title">About BRAVOHS</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Meet <span className="font-semibold text-navy-700">Mekuria Habte</span>, Founder & CEO of BRAVOHS
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                BRAVOHS helps cafés, restaurants, guest houses, and hotels improve operations, customer satisfaction, team performance, and digital visibility. With extensive experience in the hospitality industry, Mekuria brings practical expertise and proven strategies to help your business thrive.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're starting a new venture or optimizing an existing operation, BRAVOHS provides comprehensive solutions tailored to your unique business needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-gold-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Hospitality Industry Expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-gold-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Practical Operational Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-gold-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Customer-Focused Approach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="divider" />
            </div>
            <h2 className="section-title text-center">Our Services</h2>
            <p className="section-subtitle text-center">
              Comprehensive solutions to elevate your hospitality business
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Startup Organization */}
            <div className="service-card">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gold-100 rounded-full">
                  <ChefHat className="text-gold-600" size={32} />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-700 mb-4">Hospitality Startup Organization</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> Café Setup
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> Restaurant Setup
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> Guest House Setup
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> Hotel Setup
                </li>
              </ul>
            </div>

            {/* Consulting */}
            <div className="service-card">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Lightbulb className="text-blue-600" size={32} />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-700 mb-4">Hospitality Consulting</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> Operations Improvement
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> Customer Satisfaction
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> Business Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> Process Optimization
                </li>
              </ul>
            </div>

            {/* Recruitment & Training */}
            <div className="service-card">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-green-100 rounded-full">
                  <Users className="text-green-600" size={32} />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-700 mb-4">Recruitment & Training</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> Hiring Support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> Team Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> Leadership Coaching
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> Staff Training
                </li>
              </ul>
            </div>

            {/* Social Media Marketing */}
            <div className="service-card">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-purple-100 rounded-full">
                  <Megaphone className="text-purple-600" size={32} />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-700 mb-4">Social Media Marketing</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> Facebook Marketing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> Instagram Strategy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> TikTok & LinkedIn
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> Branding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="divider" />
            </div>
            <h2 className="section-title text-center">Our Projects</h2>
            <p className="section-subtitle text-center">
              Proven success across diverse hospitality ventures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'ECCO Luxury Guest House',
                subtitle: 'ECCO Juice and Salad Bar',
                services: ['Management Leadership', 'Team Development', 'Operational Supervision'],
                image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'ORI Café & Restaurant',
                subtitle: 'Fine Dining Experience',
                services: ['Startup Organization', 'Recruitment & Training', 'Grand Opening Support'],
                image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Hammer Luxury Guesthouse',
                subtitle: 'Premium Accommodation',
                services: ['Hospitality Consultancy', 'Recruitment & Training', 'Operations'],
                image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Kukulu Restaurant',
                subtitle: 'Authentic Cuisine',
                services: ['Restaurant Management', 'Menu Development', 'Staff Training'],
                image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Begena Hotel',
                subtitle: 'Boutique Hotel',
                services: ['Hospitality Assessment', 'Organizational Restructuring', 'Staff Development'],
                image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Modern Hospitality Solutions',
                subtitle: 'Integrated Services',
                services: ['Social Media Strategy', 'Operational Improvement', 'Digital Marketing'],
                image: 'https://images.pexels.com/photos/1707267/pexels-photo-1707267.jpeg?auto=compress&cs=tinysrgb&w=600'
              }
            ].map((project, idx) => (
              <div key={idx} className="project-card overflow-hidden group">
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-navy-700 mb-1">{project.title}</h3>
                  <p className="text-gold-600 text-sm font-medium mb-4">{project.subtitle}</p>
                  <ul className="space-y-2">
                    {project.services.map((service, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="text-gold-500">→</span> {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="divider" />
            </div>
            <h2 className="section-title text-center">Why Choose BRAVOHS</h2>
            <p className="section-subtitle text-center">
              Six reasons why hospitality businesses trust us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award size={40} />,
                title: 'Industry Expertise',
                description: 'Deep knowledge and proven strategies in hospitality management and growth'
              },
              {
                icon: <CheckCircle size={40} />,
                title: 'Practical Experience',
                description: 'Real-world operational insights from successfully managing multiple ventures'
              },
              {
                icon: <Users size={40} />,
                title: 'Team Support',
                description: 'Comprehensive recruitment, training, and leadership coaching services'
              },
              {
                icon: <Star size={40} />,
                title: 'Customer Focus',
                description: 'Proven methods to elevate customer satisfaction and loyalty'
              },
              {
                icon: <Megaphone size={40} />,
                title: 'Marketing Excellence',
                description: 'Strategic social media and digital marketing to boost your visibility'
              },
              {
                icon: <Lightbulb size={40} />,
                title: 'End-to-End Solutions',
                description: 'From startup organization to operational optimization, we handle it all'
              }
            ].map((feature, idx) => (
              <div key={idx} className="card-base p-8 feature-item hover:shadow-soft-xl transition-all duration-300">
                <div className="mb-4 text-gold-600">{feature.icon}</div>
                <h3 className="font-serif text-lg font-bold text-navy-700 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="divider" />
            </div>
            <h2 className="section-title text-center">Get In Touch</h2>
            <p className="section-subtitle text-center">
              Ready to transform your hospitality business?
            </p>
          </div>

          <div className="contact-card">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-6">Mekuria Habte</h3>
                <p className="text-gold-200 text-lg font-medium mb-8">Founder & CEO, BRAVOHS</p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="text-gold-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <a href="tel:+251908232525" className="text-gold-200 hover:text-gold-100 transition-colors">
                        +251 90 823 2525
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-gold-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a href="mailto:bravohssmm@gmail.com" className="text-gold-200 hover:text-gold-100 transition-colors">
                        bravohssmm@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Globe className="text-gold-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-medium mb-1">Website</p>
                      <a href="https://bravohs.com" target="_blank" rel="noopener noreferrer" className="text-gold-200 hover:text-gold-100 transition-colors">
                        bravohs.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Instagram className="text-gold-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-medium mb-1">Instagram</p>
                      <a href="https://instagram.com/bravohssmmagency" target="_blank" rel="noopener noreferrer" className="text-gold-200 hover:text-gold-100 transition-colors">
                        @bravohssmmagency
                      </a>
                    </div>
                  </div>
                </div>

                <button onClick={() => scrollToSection('contact')} className="mt-8 btn-tertiary !text-gold-300 hover:!text-white flex items-center gap-2">
                  Schedule a Free Consultation <ArrowRight size={20} />
                </button>
              </div>

              <div className="hidden md:flex items-center justify-center">
                <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="w-64 h-64 bg-gradient-to-br from-gold-200 to-gold-300 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-navy-700 font-serif text-sm font-bold mb-2">QR Code</p>
                      <div className="w-48 h-48 bg-white rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-700 to-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Transform Your Hospitality Business?
          </h2>
          <p className="text-lg text-gold-200 mb-8">
            Let's discuss how BRAVOHS can help you achieve operational excellence and customer success
          </p>
          <button onClick={() => scrollToSection('contact')} className="btn-primary bg-gold-500 hover:bg-gold-600 text-navy-700">
            Schedule a Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-800 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <img src="/photo_5848411509489339953_x.jpg" alt="BRAVOHS" className="h-10 w-auto" />
              <span className="font-serif font-bold text-white">BRAVOHS</span>
            </div>
            <p className="text-center md:text-right text-sm">
              BRAVOHS Hospitality Solutions & Marketing Agency
            </p>
          </div>
          <div className="border-t border-navy-700 pt-8 text-center">
            <p className="font-serif text-gold-500 font-semibold text-lg mb-2">Think • Create • Connect</p>
            <p className="text-sm">
              Transforming hospitality businesses through excellence, innovation, and customer-focused solutions
            </p>
            <p className="text-xs mt-6 text-gray-500">
              © 2026 BRAVOHS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
