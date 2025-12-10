import React, { useState } from 'react';
import { Mail, Linkedin, Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch("https://formspree.io/f/xdkqwbro", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formState.name,
        email: formState.email,
        message: formState.message
      })
    });

    if (response.ok) {
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } else {
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-cloud">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Info */}
            <div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-midnight mb-8">
                Let's Start a <br/><span className="text-teal">Conversation.</span>
              </h1>
              <p className="font-serif text-xl text-midnight/70 mb-12 leading-relaxed">
                Whether you're looking to redefine your value strategy, implement AI agents, or just want to talk about electric vehicles—I'd love to hear from you.
              </p>

              <div className="space-y-8">
                <a 
                  href="mailto:rmshawn@gmail.com" 
                  className="flex items-center gap-6 group p-4 rounded-xl hover:bg-white transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-midnight text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm uppercase tracking-wider text-midnight/50 mb-1">Email</h3>
                    <p className="font-heading text-xl font-bold text-midnight group-hover:text-teal transition-colors">rmshawn@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/reagan-shawn/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-6 group p-4 rounded-xl hover:bg-white transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#0077b5] text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm uppercase tracking-wider text-midnight/50 mb-1">Social</h3>
                    <p className="font-heading text-xl font-bold text-midnight group-hover:text-teal transition-colors">Connect on LinkedIn</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-4">
                  <div className="w-14 h-14 bg-ochre/20 text-ochre rounded-full flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm uppercase tracking-wider text-midnight/50 mb-1">Location</h3>
                    <p className="font-heading text-xl font-bold text-midnight">Naples, FL / Washington D.C.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-white/50">
              <h3 className="font-heading text-2xl font-bold text-midnight mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-heading text-sm font-semibold text-midnight/70 mb-2 uppercase tracking-wide">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-cloud border border-transparent focus:bg-white focus:border-teal rounded-xl px-4 py-3 outline-none transition-all duration-300"
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-heading text-sm font-semibold text-midnight/70 mb-2 uppercase tracking-wide">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-cloud border border-transparent focus:bg-white focus:border-teal rounded-xl px-4 py-3 outline-none transition-all duration-300"
                    placeholder="jane@company.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-heading text-sm font-semibold text-midnight/70 mb-2 uppercase tracking-wide">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-cloud border border-transparent focus:bg-white focus:border-teal rounded-xl px-4 py-3 outline-none transition-all duration-300 resize-none"
                    placeholder="How can we collaborate?"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-midnight text-white font-heading font-bold text-lg py-4 rounded-xl hover:bg-teal transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  {isSent ? 'Sent!' : 'Send Message'}
                  {!isSent && <Send size={18} />}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;