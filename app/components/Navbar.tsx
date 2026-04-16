"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

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
    { name: 'Projects', href: '/projects' },
    { name: 'Interests', href: '/interests' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 md:px-20 py-8 flex justify-between items-center bg-background/80 backdrop-blur-lg border-b border-border">
      {/* Logo / Home Link */}
      <Link href="/" className="group flex items-center gap-2">
        <span className="font-bold text-xl tracking-tighter text-foreground hover:scale-105 transition-transform">
          PRANAV<span className="text-accent">.</span>
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 md:gap-10 text-sm font-medium">
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
              <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-accent" />
            )}
          </Link>
        ))}

        {/* Theme Toggle Button - Always rendered but content depends on state */}
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

        {/* External LinkedIn Link */}
        <a 
          href="https://www.linkedin.com/in/prnvprthp" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block px-4 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-accent transition-all duration-300"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
}