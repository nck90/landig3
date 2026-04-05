import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '제품 기능', href: '#features' },
    { name: '고객 사례', href: '#case-studies' },
    { name: '요금 안내', href: '#pricing' },
    { name: '도입 문의', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-xl py-3 toss-shadow' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer group">
            <div className="w-9 h-9 bg-brand-500 rounded-full flex items-center justify-center text-white font-extrabold text-xl tracking-tighter transition-all duration-500 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">C</div>
            <span className={`font-extrabold text-2xl tracking-tighter text-surface-900`}>
              Commitly
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 bg-surface-50/50 px-6 py-2 rounded-full border border-surface-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[15px] font-bold transition-colors hover:text-brand-500 text-surface-600`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className={`text-[15px] px-4 py-2 font-bold transition-colors hover:bg-surface-100 rounded-full text-surface-600`}>
              로그인
            </a>
            <a
              href="#contact"
              className="bg-brand-500 text-white px-6 py-2.5 rounded-full font-bold text-[15px] transition-all hover:bg-brand-600 hover:scale-105 active:scale-95 animate-cta-glow"
            >
              무료 도입 진단
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-surface-900"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-white pt-24 px-6 md:hidden"
          >
            <button
               className="absolute top-6 right-6 p-2 bg-surface-100 rounded-full text-surface-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-extrabold text-surface-900 tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-surface-200 my-4" />
              <a href="#" className="text-xl font-bold text-surface-600">
                로그인
              </a>
              <a
                href="#contact"
                className="w-full bg-brand-500 text-white text-center py-4 rounded-full font-bold text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                무료 도입 진단
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
