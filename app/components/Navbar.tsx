"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Experience', href: '/experience' },
    { name: 'Education', href: '/education' },
    { name: 'Projects', href: '/projects' },
    { name: 'Interests', href: '/interests' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 md:px-20 py-6 md:py-8 flex justify-between items-center bg-background/80 backdrop-blur-lg border-b border-border">
      {/* Logo / Home Link */}
      <Link href="/" className="group flex items-center gap-2 relative z-[110]">
        <span className="font-bold text-xl tracking-tighter text-foreground hover:scale-105 transition-transform">
          PRANAV<span className="text-accent">.</span>
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative transition-colors duration-300 ${
              pathname === link.href ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {link.name}
            {pathname === link.href && (
              <motion.div 
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 right-0 h-[1px] bg-accent" 
              />
            )}
          </Link>
        ))}

        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full border border-accent/20 hover:bg-muted transition-colors text-foreground cursor-pointer flex items-center justify-center min-w-[34px] min-h-[34px]"
          aria-label="Toggle Theme"
        >
          {!mounted || !isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          )}
        </button>

        <div className="flex items-center gap-4">
          <a 
            href="/pdfs/Resume_Pranav_Prathap.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-accent !text-white border border-accent hover:bg-transparent hover:!text-accent transition-all duration-300 font-bold"
          >
            Resume
          </a>
          <a 
            href="https://www.linkedin.com/in/prnvprthp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-accent transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Mobile Menu Controls */}
      <div className="flex md:hidden items-center gap-4 relative z-[110]">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full border border-accent/20 text-foreground"
          aria-label="Toggle Theme"
        >
          {!mounted || !isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          )}
        </button>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 h-screen bg-background flex flex-col items-center justify-center gap-8 z-[105]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl font-bold transition-colors ${
                  pathname === link.href ? 'text-accent' : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 w-full px-12 mt-4">
              <a 
                href="/pdfs/Resume_Pranav_Prathap.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-accent text-white font-bold text-center"
              >
                Download Resume
              </a>
              <a 
                href="https://www.linkedin.com/in/prnvprthp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl border border-border text-foreground font-bold text-center"
              >
                LinkedIn Profile
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}