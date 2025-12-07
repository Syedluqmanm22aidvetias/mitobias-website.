import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: 'Essential',
      price: '$999',
      description: 'The foundation for your digital presence.',
      features: [
        'Responsive Web Design',
        'Basic SEO Implementation',
        'Contact Form Integration',
        'Standard Performance',
        '1 Month Support'
      ]
    },
    {
      name: 'Signature',
      price: '$2,499',
      description: 'Advanced capabilities for growing brands.',
      isPremium: true,
      features: [
        'Dynamic Content Management',
        'Advanced Analytics',
        'Interactive Animations',
        'Social Media Integration',
        '3 Months Priority Support'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Full-scale digital transformation.',
      features: [
        'Custom Web Applications',
        'E-Commerce Solutions',
        'Database Architecture',
        'Full Marketing Suite',
        'Dedicated Project Manager'
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-black py-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white animate-fade-in-up">Investment</h1>
            <p className="text-gray-400 font-light text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Transparent pricing for world-class results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {plans.map((plan, idx) => (
              <div 
                key={plan.name} 
                className={`relative flex flex-col p-10 transition-all duration-500 animate-fade-in-up ${
                  plan.isPremium 
                    ? 'bg-neutral-900 border border-gold-500/30 scale-105 z-10 shadow-2xl shadow-black' 
                    : 'glass-panel border-white/5 hover:border-white/10'
                }`}
                style={{ animationDelay: `${0.2 + (idx * 0.1)}s` }}
              >
                {plan.isPremium && (
                  <div className="absolute top-0 inset-x-0 flex justify-center -mt-3">
                     <span className="bg-gold-500 text-black text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1">Recommended</span>
                  </div>
                )}
                
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">{plan.name}</h3>
                <div className={`text-5xl font-serif font-bold mb-4 ${plan.isPremium ? 'text-gold-400' : 'text-white'}`}>{plan.price}</div>
                <p className="text-gray-500 text-sm font-light mb-10 h-10">{plan.description}</p>
                
                <div className="flex-grow mb-10">
                  <ul className="space-y-5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className={`h-4 w-4 mr-4 flex-shrink-0 ${plan.isPremium ? 'text-gold-500' : 'text-neutral-700'}`} />
                        <span className="text-gray-300 text-sm font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`w-full text-center py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                    plan.isPremium
                      ? 'bg-white text-black hover:bg-gold-500'
                      : 'bg-transparent border border-white/20 text-white hover:bg-white hover:text-black'
                  }`}
                >
                  Select Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;