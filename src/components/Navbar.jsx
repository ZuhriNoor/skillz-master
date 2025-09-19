"use client"; // if using Next.js App Router

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50 border-b-2">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12 lg:px-28">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img 
            src="/logo.png"  
            alt="Skillz Master Academy Logo" 
            className="h-14 w-auto" 
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          <li><a href="#about" className="hover:text-brand-secondary">About</a></li>
          <li><a href="#programs" className="hover:text-brand-secondary">Programs</a></li>
          <li><a href="#careers" className="hover:text-brand-secondary">Careers</a></li>
          <li><a href="#contact" className="hover:text-brand-secondary">Contact</a></li>
        </ul>

        {/* CTA + Contact (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#enroll" 
            className="bg-brand-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-brand-secondary transition"
          >
            Enroll Now
          </a>
          <a 
            href="tel:+911234567890" 
            className="flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-500 transition"
          >
            📞 +91 12345 67890
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-brand-primary text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col items-center gap-4 py-6 text-lg font-medium">
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#programs" onClick={() => setIsOpen(false)}>Programs</a></li>
            <li><a href="#careers" onClick={() => setIsOpen(false)}>Careers</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            <li>
              <a 
                href="#enroll" 
                className="bg-brand-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-brand-secondary transition"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </a>
            </li>
            <li>
              <a 
                href="tel:+911234567890" 
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                onClick={() => setIsOpen(false)}
              >
                📞 +91 12345 67890
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
