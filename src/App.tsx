import { Phone, Mail, Globe, Instagram, ChefHat, Users, Lightbulb, Megaphone, Award, CheckCircle, Star, Youtube, Send } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-700 via-navy-600 to-navy-800">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-gradient-to-b from-navy-700 to-navy-600 shadow-soft-lg">
        <div className="max-w-2xl mx-auto px-4 py-4 flex flex-col items-center">
          <div className="mb-3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gold-500 rounded-full blur-lg opacity-20" />
              <img
                src="/photo_5848411509489339953_x.jpg"
                alt="BRAVOHS"
                className="relative h-16 w-auto"
              />
            </div>
          </div>
          <h1 className="text-3xl font-serif font-bold text-white">BRAVOHS</h1>
          <p className="text-gold-300 text-sm font-medium">Hospitality Solutions & Marketing</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Profile Section */}
        <div className="text-center mb-8 animate-fade-in">
          <p className="text-gray-200 text-sm leading-relaxed">
            Practical hospitality support for cafés, restaurants, guest houses, and hotels — from setup to daily operations and marketing.
          </p>
        </div>

        {/* Primary Links */}
        <div className="space-y-3 mb-8 animate-slide-up">
          {/* Book Consultation */}
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center justify-between w-full px-6 py-4 bg-gold-500 hover:bg-gold-600 text-navy-700 font-bold rounded-lg transition-all duration-300 hover:shadow-soft-lg hover:scale-105 group"
          >
            <span>Book a Free Consultation</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          {/* Services */}
          <button
            onClick={() => scrollToSection('services')}
            className="flex items-center justify-between w-full px-6 py-4 bg-navy-600 hover:bg-navy-500 text-gold-300 font-semibold rounded-lg transition-all duration-300 hover:shadow-soft-lg hover:scale-105 group border border-gold-400 border-opacity-30"
          >
            <span>Our Services</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          {/* Projects */}
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center justify-between w-full px-6 py-4 bg-navy-600 hover:bg-navy-500 text-gold-300 font-semibold rounded-lg transition-all duration-300 hover:shadow-soft-lg hover:scale-105 group border border-gold-400 border-opacity-30"
          >
            <span>Our Projects</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          {/* About */}
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center justify-between w-full px-6 py-4 bg-navy-600 hover:bg-navy-500 text-gold-300 font-semibold rounded-lg transition-all duration-300 hover:shadow-soft-lg hover:scale-105 group border border-gold-400 border-opacity-30"
          >
            <span>About BRAVOHS</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          {/* Why Us */}
          <button
            onClick={() => scrollToSection('why-us')}
            className="flex items-center justify-between w-full px-6 py-4 bg-navy-600 hover:bg-navy-500 text-gold-300 font-semibold rounded-lg transition-all duration-300 hover:shadow-soft-lg hover:scale-105 group border border-gold-400 border-opacity-30"
          >
            <span>Why Choose Us</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Contact Icons */}
        <div className="grid grid-cols-3 gap-2 mb-12 pb-8 border-b border-navy-500">
          <a
            href="tel:+251908232525"
            className="flex items-center justify-center gap-2 px-3 py-3 bg-navy-600 hover:bg-navy-500 text-white rounded-lg transition-all duration-300 hover:shadow-soft group"
          >
            <Phone size={18} className="text-gold-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium">Call</span>
          </a>

          <a
            href="mailto:bravohssmm@gmail.com"
            className="flex items-center justify-center gap-2 px-3 py-3 bg-navy-600 hover:bg-navy-500 text-white rounded-lg transition-all duration-300 hover:shadow-soft group"
          >
            <Mail size={18} className="text-gold-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium">Email</span>
          </a>

          <a
            href="https://bravohs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-3 bg-navy-600 hover:bg-navy-500 text-white rounded-lg transition-all duration-300 hover:shadow-soft group"
          >
            <Globe size={18} className="text-gold-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium">Website</span>
          </a>

          <a
            href="https://instagram.com/bravohssmmagency"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-3 bg-navy-600 hover:bg-navy-500 text-white rounded-lg transition-all duration-300 hover:shadow-soft group"
          >
            <Instagram size={18} className="text-gold-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium">Instagram</span>
          </a>

          <a
            href="https://youtube.com/@bravohs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-3 bg-navy-600 hover:bg-navy-500 text-white rounded-lg transition-all duration-300 hover:shadow-soft group"
          >
            <Youtube size={18} className="text-gold-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium">YouTube</span>
          </a>

          <a
            href="https://t.me/bravohs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-3 bg-navy-600 hover:bg-navy-500 text-white rounded-lg transition-all duration-300 hover:shadow-soft group"
          >
            <Send size={18} className="text-gold-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium">Telegram</span>
          </a>
        </div>

        {/* Services Section */}
        <section id="services" className="mb-12 scroll-mt-32">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-gold-400">●</span> Our Services
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <ChefHat size={24} />,
                title: 'Hospitality Startup Organization',
                items: ['Café Setup', 'Restaurant Setup', 'Guest House Setup', 'Hotel Setup']
              },
              {
                icon: <Lightbulb size={24} />,
                title: 'Hospitality Consulting',
                items: ['Operations Improvement', 'Customer Satisfaction', 'Business Development', 'Process Optimization']
              },
              {
                icon: <Users size={24} />,
                title: 'Recruitment & Training',
                items: ['Hiring Support', 'Team Development', 'Leadership Coaching', 'Staff Training']
              },
              {
                icon: <Megaphone size={24} />,
                title: 'Social Media Marketing',
                items: ['Facebook Marketing', 'Instagram Strategy', 'TikTok & LinkedIn', 'Branding']
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-navy-600 hover:bg-navy-500 border border-gold-400 border-opacity-30 rounded-lg p-5 transition-all duration-300 hover:shadow-soft-lg">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-gold-400 flex-shrink-0 mt-1">{service.icon}</div>
                  <h3 className="font-serif font-bold text-white text-lg">{service.title}</h3>
                </div>
                <ul className="ml-9 space-y-1">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="text-gold-400">·</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12 scroll-mt-32">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-gold-400">●</span> Our Projects
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'ECCO Luxury Guest House',
                subtitle: 'ECCO Juice and Salad Bar',
                services: ['Management Leadership', 'Team Development', 'Operational Supervision']
              },
              {
                title: 'ORI Café & Restaurant',
                subtitle: 'Fine Dining Experience',
                services: ['Startup Organization', 'Recruitment & Training', 'Grand Opening Support']
              },
              {
                title: 'Hammer Luxury Guesthouse',
                subtitle: 'Premium Accommodation',
                services: ['Hospitality Consultancy', 'Recruitment & Training', 'Operations']
              },
              {
                title: 'Kukulu Restaurant',
                subtitle: 'Authentic Cuisine',
                services: ['Restaurant Management', 'Menu Development', 'Staff Training']
              },
              {
                title: 'Begena Hotel',
                subtitle: 'Boutique Hotel',
                services: ['Hospitality Assessment', 'Organizational Restructuring', 'Staff Development']
              }
            ].map((project, idx) => (
              <div key={idx} className="bg-navy-600 hover:bg-navy-500 border border-gold-400 border-opacity-30 rounded-lg p-5 transition-all duration-300 hover:shadow-soft-lg">
                <h3 className="font-serif font-bold text-white text-lg mb-1">{project.title}</h3>
                <p className="text-gold-300 text-sm font-medium mb-3">{project.subtitle}</p>
                <ul className="space-y-1">
                  {project.services.map((service, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="text-gold-400">→</span> {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-12 scroll-mt-32">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-gold-400">●</span> About BRAVOHS
          </h2>
          <div className="bg-navy-600 border border-gold-400 border-opacity-30 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="font-serif font-bold text-white text-xl mb-2">Mekuria Habte</h3>
              <p className="text-gold-300 font-medium">Founder & CEO, BRAVOHS</p>
            </div>
            <p className="text-gray-200 leading-relaxed">
              BRAVOHS helps cafés, restaurants, guest houses, and hotels improve operations, customer satisfaction, team performance, and digital visibility.
            </p>
            <p className="text-gray-200 leading-relaxed">
              With extensive experience in the hospitality industry, Mekuria brings practical expertise and proven strategies to help your business thrive. Whether you're starting a new venture or optimizing an existing operation, BRAVOHS provides comprehensive solutions tailored to your unique business needs.
            </p>
            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-gold-400 flex-shrink-0" size={20} />
                <span className="text-gray-200">Hospitality Industry Expertise</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-gold-400 flex-shrink-0" size={20} />
                <span className="text-gray-200">Practical Operational Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-gold-400 flex-shrink-0" size={20} />
                <span className="text-gray-200">Customer-Focused Approach</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="mb-12 scroll-mt-32">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-gold-400">●</span> Why Choose BRAVOHS
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <Award size={24} />,
                title: 'Industry Expertise',
                description: 'Deep knowledge and proven strategies in hospitality management and growth'
              },
              {
                icon: <CheckCircle size={24} />,
                title: 'Practical Experience',
                description: 'Real-world operational insights from successfully managing multiple ventures'
              },
              {
                icon: <Users size={24} />,
                title: 'Team Support',
                description: 'Comprehensive recruitment, training, and leadership coaching services'
              },
              {
                icon: <Star size={24} />,
                title: 'Customer Focus',
                description: 'Proven methods to elevate customer satisfaction and loyalty'
              },
              {
                icon: <Megaphone size={24} />,
                title: 'Marketing Excellence',
                description: 'Strategic social media and digital marketing to boost your visibility'
              },
              {
                icon: <Lightbulb size={24} />,
                title: 'End-to-End Solutions',
                description: 'From startup organization to operational optimization, we handle it all'
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-navy-600 hover:bg-navy-500 border border-gold-400 border-opacity-30 rounded-lg p-5 transition-all duration-300 hover:shadow-soft-lg">
                <div className="flex items-start gap-3 mb-2">
                  <div className="text-gold-400 flex-shrink-0 mt-1">{feature.icon}</div>
                  <h3 className="font-serif font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 text-sm ml-9">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12 scroll-mt-32">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-gold-400">●</span> Get In Touch
          </h2>
          <div className="bg-gradient-to-br from-navy-600 to-navy-700 border border-gold-400 border-opacity-30 rounded-lg p-6 space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-1">Mekuria Habte</h3>
              <p className="text-gold-300 text-lg font-medium">Founder & CEO, BRAVOHS</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="text-gold-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-medium text-white mb-1">Phone</p>
                  <a
                    href="tel:+251908232525"
                    className="text-gold-300 hover:text-gold-200 transition-colors"
                  >
                    +251 90 823 2525
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-gold-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-medium text-white mb-1">Email</p>
                  <a
                    href="mailto:bravohssmm@gmail.com"
                    className="text-gold-300 hover:text-gold-200 transition-colors"
                  >
                    bravohssmm@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Globe className="text-gold-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-medium text-white mb-1">Website</p>
                  <a
                    href="https://bravohs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-300 hover:text-gold-200 transition-colors"
                  >
                    bravohs.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="text-gold-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-medium text-white mb-1">Instagram</p>
                  <a
                    href="https://instagram.com/bravohssmmagency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-300 hover:text-gold-200 transition-colors"
                  >
                    @bravohssmmagency
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Youtube className="text-gold-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-medium text-white mb-1">YouTube</p>
                  <a
                    href="https://youtube.com/@bravohs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-300 hover:text-gold-200 transition-colors"
                  >
                    @BRAVOHS
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Send className="text-gold-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-medium text-white mb-1">Telegram</p>
                  <a
                    href="https://t.me/bravohs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-300 hover:text-gold-200 transition-colors"
                  >
                    @bravohs
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                const mailtoLink = document.createElement('a');
                mailtoLink.href = 'mailto:bravohssmm@gmail.com?subject=Free%20Consultation%20Request';
                mailtoLink.click();
              }}
              className="w-full px-6 py-3 bg-gold-500 hover:bg-gold-600 text-navy-700 font-bold rounded-lg transition-all duration-300 hover:shadow-soft-lg"
            >
              Schedule a Free Consultation
            </button>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-gray-300 text-xs border-t border-navy-500 pt-8 pb-12">
          <p className="font-serif text-gold-300 font-semibold text-sm mb-2">Think • Create • Connect</p>
          <p className="text-gray-400">© 2026 BRAVOHS. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}