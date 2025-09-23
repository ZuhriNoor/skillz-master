// You might need react-icons if you haven't installed it yet: npm install react-icons
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className=" font-montserrat py-16 md:py-24 bg-gray-300 md:px-40">
      <div className="container mx-auto px-6">
        {/* Main Card Container */}
        <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12">
          {/* Responsive Two-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Column: Contact Information */}
            <div className="text-gray-800">
              <h3 className="text-3xl font-bold text-brand-primary mb-2">Get In Touch</h3>
              <p className="text-gray-600 mb-8">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FiPhone size={20} className="text-brand-primary" />
                  <a href="tel:+911111111111" className="text-gray-700 hover:text-brand-primary">+91 1111111111</a>
                </div>
                <div className="flex items-center gap-4">
                  <FiMail size={20} className="text-brand-primary" />
                  <a href="mailto:skillzmasters@gmail.com" className="text-gray-700 hover:text-brand-primary">skillzmasters@gmail.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <FiMapPin size={20} className="text-brand-primary" />
                  <span className="text-gray-700">ABC, Near XYZ Avenue, Kerala</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary"
                ></textarea>
              </div>
              <button className="w-full bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-secondary transition md:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}