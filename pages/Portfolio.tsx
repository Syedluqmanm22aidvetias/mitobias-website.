import React from 'react';
import Layout from '../components/Layout';
import { PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const works: PortfolioItem[] = [
    { id: 1, title: 'Luxe Interiors', category: 'Web Development', imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop' },
    { id: 2, title: 'FinTech Global', category: 'App Design', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop' },
    { id: 3, title: 'Aura Fashion', category: 'E-Commerce', imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop' },
    { id: 4, title: 'Urban Architecture', category: 'Branding', imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop' },
    { id: 5, title: 'Neon Energy', category: 'Marketing', imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop' },
    { id: 6, title: 'Zen Spa', category: 'Web Development', imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop' },
  ];

  return (
    <Layout>
      <div className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 animate-fade-in-up">
             <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">Selected Works</h1>
                <p className="text-neutral-500 font-light text-lg">A curation of our finest digital craftsmanship.</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {works.map((work, idx) => (
              <div 
                key={work.id} 
                className="group relative overflow-hidden cursor-pointer aspect-[3/4] animate-fade-in-up bg-neutral-100 shadow-md hover:shadow-xl transition-all duration-500"
                style={{ animationDelay: `${0.1 + (idx * 0.1)}s` }}
              >
                <img 
                  src={work.imageUrl} 
                  alt={work.title} 
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">{work.category}</span>
                  <h3 className="text-white text-xl font-serif font-bold">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;