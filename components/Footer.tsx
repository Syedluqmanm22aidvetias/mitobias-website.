import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="mb-10 md:mb-0">
            <h3 className="text-3xl font-serif font-bold text-white mb-4 tracking-wider">MITOBIAS</h3>
            <p className="text-neutral-400 text-sm max-w-sm font-light leading-relaxed">
              Defining the future of digital interaction. <br/>Based in Tamil Nadu, operating globally.
            </p>
          </div>
          
          <div className="flex space-x-8">
             <a href="#" className="text-neutral-500 hover:text-white transition-colors duration-300"><Instagram strokeWidth={1.5} size={20} /></a>
             <a href="#" className="text-neutral-500 hover:text-white transition-colors duration-300"><Twitter strokeWidth={1.5} size={20} /></a>
             <a href="#" className="text-neutral-500 hover:text-white transition-colors duration-300"><Linkedin strokeWidth={1.5} size={20} /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-800 pt-12">
           <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Menu</h4>
              <ul className="space-y-4 text-sm text-neutral-400 font-light">
                 <li><Link to="/services" className="hover:text-gold-500 transition-colors">Services</Link></li>
                 <li><Link to="/portfolio" className="hover:text-gold-500 transition-colors">Portfolio</Link></li>
              </ul>
           </div>
           <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-neutral-400 font-light">
                 <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Contact</Link></li>
                 <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Careers</Link></li>
                 <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Legal</Link></li>
              </ul>
           </div>
           <div className="col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-neutral-400 font-light">
                 <li className="text-neutral-300">mitobiastech@gmail.com</li>
                 <li>+91 9092009914</li>
                 <li>Erode, Tamil Nadu, India</li>
              </ul>
           </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} Mitobias. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0">
             {/* Discrete Admin Link */}
            <Link to="/admin/login" className="text-neutral-700 hover:text-white transition-colors p-2" aria-label="Admin Access">
              <Lock size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;