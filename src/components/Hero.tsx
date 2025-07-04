import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Target, Play, BaggageClaim, Briefcase, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/apply');
  };

  const handleLearnMore = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 212, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 212, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-gray-700/30 to-gray-500/30 rounded-full blur-xl"
        />
        
        {/* Additional floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotateX: [0, 15, 0],
            rotateY: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg opacity-30 transform rotate-45 hidden lg:block"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotateX: [0, -10, 0],
            rotateZ: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-10 w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full opacity-40 hidden lg:block"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-20 w-8 h-8 bg-yellow-400/40 rounded-sm transform rotate-12 hidden lg:block"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full border border-yellow-400/30"
          >
            <span className="text-yellow-400 font-semibold text-sm">🚀 AI & Tech Learning Experience</span>
          </motion.div>
          
          <h1 className="text-lg md:text-6xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Build Your Dream Career with{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                AI & Tech
              </span>
              <motion.div
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 origin-left"
              />
            </span>{' '}
            Skills
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            At{' '}
            <span className="text-yellow-400 font-semibold">Digitrove</span> - 
            we equip you with future-focused skills and 100% job support to turn your ambition into achievement
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 212, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-8 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 flex items-center shadow-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLearnMore}
            className="border-2 border-yellow-400 text-yellow-400 font-bold py-4 px-8 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center"
          >
            <Play className="mr-2 w-5 h-5" />
            Learn More
          </motion.button>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {[
            { 
              icon: Brain, 
              title: "AI-Powered Learning", 
              desc: "Smart learning with built-in AI tools to boost your understanding and skills faster.",
              color: "from-blue-500 to-purple-600"
            },
            { 
              icon: Briefcase, 
              title: "Guaranteed Job After Course", 
              desc: "With our 100% job placement promise, your learning leads directly to earning.",
              color: "from-yellow-400 to-orange-500"
            },
            { 
              icon: GraduationCap, 
              title: "Skill-Building Internship", 
              desc: "Get real-world experience through our internship program — polish your skills and prepare for professional success.",
              color: "from-green-400 to-blue-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gray-800/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 lg:w-8 lg:h-8 text-black" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "100+", label: "Students Trained" },
            { number: "101%", label: "Job Placement" },
            { number: "5", label: "AI Courses" },
            { number: "5+", label: "Years Excellence" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-1">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;