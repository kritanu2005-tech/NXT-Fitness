/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  ChevronRight, 
  Play, 
  Star, 
  Check, 
  ArrowRight,
  Menu,
  X,
  Dumbbell,
  Users,
  Timer,
  ShieldCheck,
  Clock,
  Mail
} from 'lucide-react';

// --- Theme Components ---

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-block px-3 py-1 rounded-full border border-brand/30 text-brand text-[10px] font-bold uppercase tracking-widest bg-brand/5 mb-4">
    {children}
  </div>
);

const GlassCard = ({ children, className = "", ...props }: { children: React.ReactNode, className?: string, [key: string]: any }) => (
  <div className={`glass-card p-8 rounded-2xl ${className}`} {...props}>
    {children}
  </div>
);

const ButtonPrimary = ({ children, className = "", href }: { children: React.ReactNode, className?: string, href?: string }) => {
  const content = (
    <span className={`px-8 py-4 accent-gradient text-black font-black uppercase text-sm tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 ${className}`}>
      {children}
    </span>
  );
  
  if (href) return <a href={href}>{content}</a>;
  return <button className="block w-full md:w-auto">{content}</button>;
};

// --- Sections ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/50 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-12 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 accent-gradient rounded-full flex items-center justify-center font-black text-black text-xl italic">
            N
          </div>
          <span className="text-2xl font-black tracking-tighter italic">
            NXT <span className="text-brand">FITNESS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="#about" className="text-white hover:text-brand transition-colors">The Gym</a>
          <a href="#services" className="hover:text-brand transition-colors">Programs</a>
          <a href="#plans" className="hover:text-brand transition-colors">Membership</a>
          <a href="#testimonials" className="hover:text-brand transition-colors">Reviews</a>
          <ButtonPrimary href="https://wa.me/918777082727" className="!px-6 !py-2.5 rounded-none">
            Join
          </ButtonPrimary>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 right-0 bg-dark/95 backdrop-blur-2xl border-b border-white/5 p-8 flex flex-col gap-6 md:hidden"
          >
            <a href="#about" onClick={() => setIsOpen(false)} className="text-xl font-black italic uppercase tracking-tight">The Gym</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-xl font-black italic uppercase tracking-tight">Programs</a>
            <a href="#plans" onClick={() => setIsOpen(false)} className="text-xl font-black italic uppercase tracking-tight">Membership</a>
            <ButtonPrimary href="https://wa.me/918777082727" className="w-full">Start Journey</ButtonPrimary>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden px-12">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-20">
        <div className="w-full md:w-3/5">
          <Badge>Best Gym in Thakurpukur</Badge>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-[8rem] font-black leading-[0.85] tracking-tighter text-glow italic mb-10"
          >
            BEYOND<br/>
            <span className="text-outline border-b-4 border-brand">LIMITS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/60 max-w-md leading-relaxed mb-10"
          >
            Premium fitness experience in the heart of Behala. High-class equipment, 
            experienced trainers, and a motivating atmosphere designed for your evolution.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-8"
          >
            <ButtonPrimary href="https://wa.me/918777082727">
              Start Journey
            </ButtonPrimary>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">WhatsApp Us</span>
              <span className="text-2xl font-mono font-bold text-brand">+91 87770 82727</span>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-2/5 flex flex-col items-center md:items-end gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <GlassCard className="max-w-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 accent-gradient flex items-center justify-center rounded-full shadow-lg">
                <span className="text-3xl font-black text-black">"</span>
              </div>
              <p className="text-xl italic leading-relaxed mb-6 text-white/90">
                Premium kind of gym.. trainers n specially owner Riju da is very kind and supportive... 
                Best gym in Thakurpukur.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-black text-sm uppercase">KJ</div>
                <div>
                  <div className="font-black text-sm uppercase tracking-wider">Koustav Jana</div>
                  <div className="text-brand text-xs font-bold uppercase tracking-widest">★★★★★ Google Review</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="flex gap-4">
            {[
              { val: "4.6", label: "Rating" },
              { val: "88+", label: "Reviews" },
              { val: "24/7", label: "Support" }
            ].map((stat, i) => (
              <GlassCard key={i} className="px-8 py-5 text-center !rounded-xl !p-0 min-w-[100px]">
                <div className="text-2xl font-black italic">{stat.val}</div>
                <div className="text-[9px] uppercase tracking-widest text-white/40 font-black">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoRail = () => {
  return (
    <section className="relative z-10 border-t border-b border-white/10 py-16 px-12 bg-white/[0.02] backdrop-blur-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex items-center gap-5">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <MapPin className="w-6 h-6 text-brand" />
          </div>
          <div className="text-xs leading-relaxed text-white/60">
            <span className="block font-black text-white uppercase mb-1 tracking-widest">Location</span>
            115, Diamond Harbour Rd, Padma Pukur,<br/>Nabapally, Kolkata 700063
          </div>
        </div>

        <div className="flex items-center gap-5 md:justify-center">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <Clock className="w-6 h-6 text-brand" />
          </div>
          <div className="text-xs leading-relaxed text-white/60">
            <span className="block font-black text-white uppercase mb-1 tracking-widest">Working Hours</span>
            Mon - Sat: 06:00 AM - 11:00 PM<br/>Sun: 08:00 AM - 01:00 PM
          </div>
        </div>

        <div className="flex items-center gap-5 md:justify-end">
          <div className="p-4 rounded-xl bg-brand/10 border border-brand/20">
            <Mail className="w-6 h-6 text-brand" />
          </div>
          <div className="text-right text-xs leading-relaxed">
            <span className="block font-black text-white uppercase mb-1 tracking-widest">Direct Contact</span>
            <span className="text-brand font-black italic">riju.da@nxtfitness.in</span><br/>
            <span className="text-white/60 font-medium">Owner: Riju Da</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProgramSection = () => {
  const programs = [
    { title: "Strength", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070", tag: "Heavy Lifting" },
    { title: "Functional", img: "https://images.unsplash.com/photo-1541534741688-6078c64b5cc5?q=80&w=2069", tag: "Mobility" },
    { title: "Cardio", img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2069", tag: "Endurance" }
  ];

  return (
    <section id="services" className="py-32 px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Badge>Elite Programs</Badge>
        <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-20">
          EVOLVE YOUR <span className="text-brand">BODY</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <div key={i} className="group relative h-[500px] overflow-hidden rounded-3xl border border-white/10 glass-card">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-2 block">{p.tag}</span>
                <h3 className="text-4xl font-black italic uppercase italic">{p.title}</h3>
                <div className="h-0.5 w-0 group-hover:w-full bg-brand transition-all duration-500 mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Membership = () => {
  return (
    <section id="plans" className="py-32 px-12 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="flex-1">
          <Badge>Membership</Badge>
          <h2 className="text-6xl font-black italic tracking-tighter mb-10">
            JOIN THE <br/><span className="text-brand">ELITE CIRCLE</span>
          </h2>
          <p className="text-white/50 text-xl max-w-md mb-12">
            No long term commitments required. Start with our standard monthly plan and upgrade any time.
          </p>
          <div className="space-y-6">
            {["High-class equipment", "Certified Trainers", "Locker Facility", "Supplements Store"].map((text) => (
              <div key={text} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest">
                <div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center">
                  <Check size={12} className="text-black" />
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[450px]">
          <GlassCard className="!p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 accent-gradient rounded-bl-full opacity-10" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand mb-10">Standard Pack</h3>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-8xl font-black text-glow">1.5K</span>
              <span className="text-xl font-bold text-white/40 italic">/month</span>
            </div>
            <p className="text-white/40 mb-10 text-sm font-medium">All standard gym facilities included. No parking available.</p>
            <ButtonPrimary className="w-full !rounded-none !py-5">Get Access Now</ButtonPrimary>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-12 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 accent-gradient rounded-full flex items-center justify-center font-black text-black">N</div>
          <span className="text-xl font-black italic uppercase italic tracking-tighter">
            NXT <span className="text-brand">FITNESS</span>
          </span>
        </div>
        
        <p className="text-[10px] font-black uppercase tracking-widest text-white/20">
          © 2026 NXT Fitness Hub. Thakurpukur, Kolkata.
        </p>

        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="bg-dark min-h-screen">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 mesh-gradient pointer-events-none opacity-50 z-0"></div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <InfoRail />
          <ProgramSection />
          <Membership />
        </main>
        <Footer />
      </div>
    </div>
  );
}
