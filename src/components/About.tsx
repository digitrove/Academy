import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Users, Award, MedalIcon } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '101%', label: 'Job Placement Rate', icon: Award },
    { number : 'Certificate', label: 'After Course', icon: MedalIcon },
    { number: '5', label: 'AI-Enhanced Courses', icon: Brain },
    { number: '5+', label: 'Years of Excellence', icon: Rocket },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-yellow-400">Digitrove? </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Digitrove is a future-ready computer training center that equips students with in-demand digital and tech skills. Our programs combine hands-on learning with modern tools like Artificial Intelligence, automation, and real-world project work — so you can confidently step into your career.
            </p>
            
            <h3 >
              <p className='font-bold'>We offer more than just training — we offer transformation.</p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our expert instructors bring real industry experience and use practical teaching methods to ensure you don’t just learn — you master the skills that matter.
            </p>
            </h3>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-semibold text-white mb-2">AI & Tech Learning</h3>
                <p className="text-gray-400 text-sm">Cutting-edge technology integration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Rocket className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-semibold text-white mb-2">Career Focused</h3>
                <p className="text-gray-400 text-sm">Industry-relevant curriculum</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center hover:border-yellow-400/50 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;