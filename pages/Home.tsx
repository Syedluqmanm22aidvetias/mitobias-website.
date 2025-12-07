import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowRight, Code, Zap, Globe, Monitor, Smartphone, Search } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section - White Luxury */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Subtle Gradient Background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-100 via-white to-white"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block py-1 px-4 border border-neutral-200 rounded-full bg-white shadow-sm text-[10px] font-bold tracking-[0.3em] uppercase text-gold-500 mb-8 animate-fade-in-up">
            Premium Digital Solutions
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-black mb-8 animate-fade-in-up leading-[1.1]" style={{ animationDelay: '0.1s' }}>
            We Build Digital <br className="hidden md:block" />
            Experiences That <br className="hidden md:block" />
            <span className="text-neutral-400">Define Brands.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Mitobias bridges the gap between vision and reality. We craft high-performance websites and marketing strategies for brands that demand perfection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/contact"
              className="group flex items-center justify-center px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black border border-neutral-200 hover:border-black transition-all duration-300 min-w-[160px] bg-white"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section - Light Grey */}
      <section className="py-32 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">Our Expertise</h2>
                  <p className="text-neutral-500 max-w-md text-sm leading-relaxed">
                      Comprehensive digital solutions tailored for growth.
                  </p>
                </div>
                <Link to="/services" className="hidden md:flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gold-500 hover:text-black transition-colors">
                    View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Monitor, title: 'Web Development', desc: 'Custom, responsive websites built with modern technologies.' },
                  { icon: Smartphone, title: 'Digital Marketing', desc: 'Strategic campaigns that drive traffic and convert leads.' },
                  { icon: Search, title: 'SEO Optimization', desc: 'Data-driven strategies to maximize your online visibility.' }
                ].map((service, idx) => (
                  <div key={idx} className="group p-10 bg-white border border-neutral-200 hover:border-gold-500/50 transition-all duration-500 shadow-sm hover:shadow-xl">
                      <div className="h-10 w-10 flex items-center justify-center bg-neutral-50 rounded-full mb-6 group-hover:bg-gold-500/10 transition-colors">
                        <service.icon className="h-5 w-5 text-black group-hover:text-gold-500 transition-colors duration-500" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-serif text-black mb-4">{service.title}</h3>
                      <p className="text-neutral-500 text-sm font-light leading-relaxed mb-8">{service.desc}</p>
                      <Link to="/services" className="inline-block text-[10px] uppercase tracking-[0.2em] text-black border-b border-neutral-200 pb-1 group-hover:border-gold-500 transition-colors">
                        Learn More
                      </Link>
                  </div>
                ))}
            </div>
            
             <div className="mt-12 text-center md:hidden">
                <Link to="/services" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gold-500 hover:text-black transition-colors">
                    View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </div>
      </section>

      {/* Philosophy Section - White */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-neutral-100 pb-10">
                <h2 className="text-3xl md:text-4xl font-serif text-black">Our Philosophy</h2>
                <p className="text-neutral-500 mt-4 md:mt-0 max-w-md text-sm leading-relaxed">
                    We believe in minimalism, precision, and performance. Every pixel serves a purpose.
                </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: Code, title: "Precision Engineering", desc: "Clean code architecture that ensures scalability and security." },
                { icon: Zap, title: "Rapid Performance", desc: "Optimized for speed. Because milliseconds matter to your customers." },
                { icon: Globe, title: "Global Impact", desc: "Strategies designed to position your brand on the world stage." }
            ].map((item, idx) => (
                <div key={idx} className="premium-card p-10 group">
                    <item.icon className="h-10 w-10 text-neutral-300 mb-8 group-hover:text-gold-500 transition-colors duration-500" strokeWidth={1} />
                    <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                    <p className="text-neutral-500 font-light leading-relaxed text-sm">{item.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-neutral-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-8">Ready to define your brand?</h2>
            <Link 
                to="/contact" 
                className="inline-block border-b-2 border-gold-500 text-black text-lg font-medium pb-1 hover:text-gold-500 transition-all duration-300"
            >
                Let's talk business <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;