import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SeminarPopup from '../components/SeminarPopup';
import About from '../components/About';
import Courses from '../components/Courses';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after a brief delay when page loads
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Contact />
      <Footer />
      
      {showPopup && (
        <SeminarPopup onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

export default LandingPage;