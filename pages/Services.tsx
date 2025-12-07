import React from 'react';
import Layout from '../components/Layout';
import { Monitor, Smartphone, TrendingUp, Search, PenTool, Layout as LayoutIcon, Check } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const developmentServices: ServiceItem[] = [
    {
      title: 'Web Development',
      description: 'Bespoke digital platforms engineered for performance and scalability.',
      icon: Monitor,
      features: ['React & TypeScript Architecture', 'Progressive Web Apps', 'Secure Backend Integration']
    },
    {
      title: 'E-Commerce',
      description: 'Seamless shopping experiences that drive conversion and customer loyalty.',
      icon: Smartphone,
      features: ['Custom Payment Gateways', 'Inventory Logic', 'User Experience Optimization']
    },
    {
      title: 'SaaS Applications',
      description: 'Enterprise-grade software solutions for complex business needs.',
      icon: LayoutIcon,
      features: ['Cloud Infrastructure', 'Real-time Data', 'API Development']
    }
  ];

  const marketingServices: ServiceItem[] = [
    {
      title: 'SEO Strategy',
      description: 'Dominate search results with data-driven optimization techniques.',
      icon: Search,
      features: ['Technical Audits', 'Keyword Dominance', 'Organic Growth']
    },
    {
      title: 'Social Campaigns',
      description: 'Brand storytelling that resonates with your target audience.',
      icon: TrendingUp,
      features: ['Content Direction', 'Ad Management', 'Analytics & Reporting']
    },
    {
      title: 'Content Creation',
      description: 'Premium visual and written content that defines your voice.',
      icon: PenTool,
      features: ['Copywriting', 'Visual Identity', 'Brand Guidelines']
    }
  ];

  const ServiceCard: React.FC<{ item: ServiceItem }> = ({ item }) => (
    <div className="group premium-card p-10 flex flex-col h-full bg-white">
      <div className="h-12 w-12 flex items-center justify-center mb-8 bg-neutral-50 border border-neutral-100 rounded-full group-hover:border-gold-500/50 transition-colors duration-500">
          <item.icon className="h-5 w-5 text-neutral-400 group-hover:text-gold-500 transition-colors duration-500" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-serif text-black mb-4">{item.title}</h3>
      <p className="text-neutral-500 mb-8 font-light text-sm leading-relaxed flex-grow">
          {item.description}
      </p>
      
      <ul className="space-y-3 border-t border-neutral-100 pt-6">
          {item.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-[10px] uppercase tracking-wider text-neutral-400">
              <Check className="h-3 w-3 text-gold-500 mr-3" />
              {feature}
          </li>
          ))}
      </ul>
    </div>
  );

  return (
    <Layout>
      <div className="bg-neutral-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-black animate-fade-in-up">Expertise</h1>
            <p className="text-neutral-500 font-light max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              We offer a comprehensive suite of digital solutions designed to elevate your brand.
            </p>
          </div>

          <div className="mb-32 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-12">
                <span className="h-[1px] w-8 bg-gold-500 mr-4"></span>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-black">Development</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {developmentServices.map((service, idx) => (
                <ServiceCard key={idx} item={service} />
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-12">
                <span className="h-[1px] w-8 bg-gold-500 mr-4"></span>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-black">Digital Marketing</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {marketingServices.map((service, idx) => (
                <ServiceCard key={idx} item={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;