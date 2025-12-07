import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import { MockBackend } from '../services/mockBackend';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    await MockBackend.submitContactForm(formData);
    
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <Layout>
      <div className="bg-white py-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Info */}
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-8">Get in Touch</h1>
              <p className="text-neutral-500 font-light text-lg mb-16 max-w-md leading-relaxed">
                Have a vision? Let's make it reality. Reach out to discuss how we can elevate your business.
              </p>
              
              <div className="space-y-12">
                <div className="flex items-start">
                    <span className="text-gold-500 mr-6 mt-1"><Phone size={20} strokeWidth={1.5} /></span>
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-2">Phone</h4>
                        <p className="text-neutral-500 font-light">+91 9092009914</p>
                    </div>
                </div>
                
                <div className="flex items-start">
                    <span className="text-gold-500 mr-6 mt-1"><Mail size={20} strokeWidth={1.5} /></span>
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-2">Email</h4>
                        <p className="text-neutral-500 font-light">mitobiastech@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <span className="text-gold-500 mr-6 mt-1"><MapPin size={20} strokeWidth={1.5} /></span>
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-2">Office</h4>
                        <p className="text-neutral-500 font-light">Erode, Tamil Nadu, India</p>
                    </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-neutral-50 border border-neutral-100 p-10 md:p-12 shadow-lg shadow-black/5">
                {status === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in">
                    <CheckCircle className="h-16 w-16 text-gold-500 mb-8" strokeWidth={1} />
                    <h3 className="text-2xl font-serif text-black mb-4">Message Sent</h3>
                    <p className="text-neutral-500 font-light text-sm max-w-xs">
                      We will be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="premium-input w-full px-0 py-3 focus:outline-none placeholder-transparent text-sm font-light"
                          id="name"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="company" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="premium-input w-full px-0 py-3 focus:outline-none placeholder-transparent text-sm font-light"
                          id="company"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="premium-input w-full px-0 py-3 focus:outline-none placeholder-transparent text-sm font-light"
                          id="email"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="phone" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="premium-input w-full px-0 py-3 focus:outline-none placeholder-transparent text-sm font-light"
                          id="phone"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">Message</label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="premium-input w-full px-0 py-3 focus:outline-none placeholder-transparent text-sm font-light resize-none"
                        id="message"
                      ></textarea>
                    </div>

                    <div className="pt-6">
                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full bg-black text-white font-bold uppercase tracking-[0.2em] text-xs py-4 hover:bg-gold-500 transition-all duration-300 flex items-center justify-center disabled:opacity-50 shadow-md"
                        >
                            {status === 'submitting' ? (
                            <Loader2 className="animate-spin h-4 w-4" />
                            ) : (
                            'Send Message'
                            )}
                        </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;