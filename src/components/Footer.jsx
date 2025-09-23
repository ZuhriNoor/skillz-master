// You might need to install react-icons: npm install react-icons
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const exploreLinks = [
  { name: 'About Us', href: '#' },
  { name: 'Courses', href: '#' },
  { name: 'Career Support', href: '#' },
  { name: 'Admissions', href: '#' },
  { name: 'Contacts', href: '#' },
];

const programLinks = [
  { name: 'Healthcare Management', href: '#' },
  { name:- 'HR & Corporate Admin', href: '#' },
  { name: 'Job Readiness', href: '#' },
  { name: 'AI Training', href: '#' },
  { name: 'Personal Branding', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#101566]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Column 1: Brand and Socials */}
          {/* CHANGED: Added text-center for mobile and sm:text-left for larger screens */}
          <div className="text-gray-300 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Skillz Masters</h3>
            <p className="mb-4">
              Empowering the next generation of healthcare leaders through comprehensive education and practical training.
            </p>
            {/* CHANGED: Added justify-center for mobile and sm:justify-start for larger screens */}
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" className="border border-gray-500 rounded-full p-2 hover:bg-white hover:text-indigo-800 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="border border-gray-500 rounded-full p-2 hover:bg-white hover:text-indigo-800 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="border border-gray-500 rounded-full p-2 hover:bg-white hover:text-indigo-800 transition">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Explore Links */}
          {/* CHANGED: Added text-center for mobile and sm:text-left for larger screens */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs Links */}
          {/* CHANGED: Added text-center for mobile and sm:text-left for larger screens */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Programs</h3>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          {/* CHANGED: Added text-center for mobile and sm:text-left for larger screens */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p><a href="tel:+911111111111" className="hover:text-white">+91 1111111111</a></p>
              <p><a href="mailto:skillzmasters@gmail.com" className="hover:text-white">skillzmasters@gmail.com</a></p>
              <p>ABC, Near XYZ Avenue, Kerala</p>
            </address>
          </div>
          
        </div>
      </div>

      {/* Sub-Footer (Copyright) */}
      <div className="bg-[#0F172A] py-4">
        <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
          Copyright 2025 Skillz Master, All Rights Reserved
        </div>
      </div>
    </footer>
  );
}