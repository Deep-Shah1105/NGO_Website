import React, { useState } from 'react';
import { LinkIcon } from '@heroicons/react/solid'; // Heroicons v1

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-ngo-blue text-white py-8 sm:py-12">
      <div className="container mx-auto px-2 sm:px-4 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-poppins mb-4">NGO Empower</h3>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            Dedicated to uplifting communities through education, aid, and unity.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-poppins mb-4">Stay Connected</h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded-full text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-ngo-gold"
              aria-label="Email for newsletter"
              required
            />
            <button
              type="submit"
              className="bg-ngo-gold text-ngo-blue px-4 py-2 rounded-full hover:bg-white hover:text-ngo-blue transition-colors text-sm sm:text-base font-semibold"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="text-sm text-ngo-gold mt-2">Thank you for subscribing!</p>
          )}
        </div>
        <div className="text-center md:text-right">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-poppins mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-end gap-3 sm:gap-4">
            <a href="#" aria-label="Facebook" className="text-white hover:text-ngo-gold transition-colors">
              <LinkIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            </a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-ngo-gold transition-colors">
              <LinkIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-ngo-gold transition-colors">
              <LinkIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 text-center border-t border-gray-600 pt-4">
        <p className="text-sm sm:text-base">&copy; 2025 NGO Empower. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;