import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full z-50 font-montserrat">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12 lg:px-28">

        {/* Logo (left) */}
        <a href="#home" className="flex items-center gap-2">
          <img 
            src="/logo2.png"  
            alt="Skillz Master Academy Logo" 
            className="h-10 md:h-14 w-auto" 
          />
        </a>

        {/* Desktop Nav Links + CTA (all right) */}
        <div className="hidden md:flex items-center gap-8 text-base font-medium text-gray-600">
          <ul className="flex gap-8">
            <li><a href="#home" className="hover:text-brand-primary font-semibold text-brand-primary">Home</a></li>
            <li><a href="#whyus" className="hover:text-brand-primary">Why Us</a></li>
            <li><a href="#courses" className="hover:text-brand-primary">Courses</a></li>
            <li><a href="#career" className="hover:text-brand-primary">Career</a></li>
          </ul>
          <a 
            href="#enroll" 
            className="bg-brand-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-brand-secondary transition"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-2xl text-brand-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#whyus" onClick={() => setIsOpen(false)}>Why Us</a></li>
            <li><a href="#courses" onClick={() => setIsOpen(false)}>Courses</a></li>
            <li><a href="#career" onClick={() => setIsOpen(false)}>Career</a></li>
            <li>
              <a 
                href="#enroll" 
                className="bg-brand-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-brand-secondary transition"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}