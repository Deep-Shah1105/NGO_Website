import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheckIcon } from '@heroicons/react/solid';
import { Helmet } from 'react-helmet';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const predefinedAmounts = [10, 25, 50, 100];

  const handleAmountSelect = (value) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    setAmount('');
    setCustomAmount(e.target.value);
  };

  const handleSubmit = () => {
    if (amount || customAmount) {
      // Clear form
      setAmount('');
      setCustomAmount('');
      setName('');
      setEmail('');
      setMessage('');
      // Redirect to thank-you page
      navigate('/thank-you');
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen py-12 sm:py-16 md:py-20">
      <Helmet>
        <title>NGO Empower - Donate</title>
        <meta name="description" content="Support our mission to empower communities through your donation." />
      </Helmet>
      <div className="container mx-auto px-2 sm:px-4">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ngo-blue font-poppins mb-4 sm:mb-6">
            Make a Difference Today
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Your generous donation helps us provide education, clothing, and support to communities in need.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center mb-6"
          >
            <ShieldCheckIcon className="h-5 w-5 text-ngo-blue mr-2" />
            <p className="text-sm sm:text-base text-ngo-blue">Secure Donation Process</p>
          </motion.div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 max-w-lg mx-auto"
        >
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-ngo-blue font-poppins mb-4">
              Choose Your Donation Amount
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
              {predefinedAmounts.map((value) => (
                <button
                  key={value}
                  onClick={() => handleAmountSelect(value)}
                  className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors ${
                    amount === value
                      ? 'bg-ngo-gold text-ngo-blue'
                      : 'bg-gray-200 text-gray-700 hover:bg-ngo-gold hover:text-ngo-blue'
                  }`}
                  aria-label={`Donate ₹${value}`}
                >
                  ₹{value}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <input
                type="number"
                placeholder="Custom Amount"
                value={customAmount}
                onChange={handleCustomAmount}
                className="w-full px-3 py-2 rounded-full text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-ngo-gold"
                aria-label="Custom donation amount"
                min="1"
              />
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-ngo-blue font-poppins mb-4">
              Your Information
            </h2>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-full text-gray-700 text-sm sm:text-base mb-3 focus:outline-none focus:ring-2 focus:ring-ngo-gold"
              aria-label="Full name"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-full text-gray-700 text-sm sm:text-base mb-3 focus:outline-none focus:ring-2 focus:ring-ngo-gold"
              aria-label="Email address"
              required
            />
            <textarea
              placeholder="Optional Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 rounded-lg text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-ngo-gold"
              rows="4"
              aria-label="Optional message"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-ngo-gold text-ngo-blue px-6 py-3 rounded-full font-bold hover:bg-ngo-blue hover:text-white transition-colors text-sm sm:text-base"
            aria-label="Submit donation"
            disabled={!amount && !customAmount}
          >
            Donate Now
          </button>
        </motion.div>
      </div>
    </main>
  );
};

export default Donate;