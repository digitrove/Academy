import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  Palette, 
  Monitor, 
  Code, 
  Brain,
  Clock,
  Award,
  CalendarDays,
  Clock5
} from 'lucide-react';

const Courses: React.FC = () => {
  const navigate = useNavigate();

  const courses = [
    {
      title: 'Digital Marketing + AI',
      icon: TrendingUp,
      description: 'Master modern digital marketing strategies enhanced with AI tools for social media, SEO, content creation, and analytics.',
      duration: '3 Months',
      Days: 'Monday & Tuesday',
      Timing: '5:00 PM - 6:30 PM',
      level: 'Intermediat'
    },
    {
      title: 'AI + Agentic AI',
      icon: Brain,
      description: 'Dive deep into artificial intelligence, machine learning, and advanced agentic AI systems for the future of technology.',
      duration: '4 Months',
      Days: 'WednesDay & Thursday',
      Timing: '6:30 PM - 8:00 PM',
      level: 'Intermediat'
    },
    {
      title: 'Web Development + AI',
      icon: Code,
      description: 'Build modern, responsive websites and web applications using the latest technologies enhanced with AI development tools.',
      duration: '3 Months',
      Days: 'Friday & Saturday',
      Timing: '6:30 PM - 8:00 PM',
      level: 'Intermediat'
    },
    {
      title: 'Graphic Animation + AI',
      icon: Palette,
      description: 'Create stunning visual content and animations using industry-standard tools enhanced with AI-powered design assistance.',
      duration: '3 Months',
      Days: 'Monday & Tuesday',
      Timing: '5:00 PM - 6:00 PM',
      level: 'Intermediate'
    },
    {
      title: 'Shopify + Dropshipping',
      icon: Palette,
      description: 'Create stunning visual content and animations using industry-standard tools enhanced with AI-powered design assistance.',
      duration: '3 Months',
      Days: 'WednesDay & Thursday',
      Timing: '5:00 PM - 6:00 PM',
      level: 'Intermediate'
    },
    {
      title: 'CIT (Computer Information Technology) + AI',
      icon: Monitor,
      description: 'Comprehensive IT fundamentals with AI integration covering hardware, networking, cybersecurity, and system administration.',
      duration: '3 Months',
      Days: 'Friday & Saturday',
      Timing: '5:00 PM - 6:00 PM',
      level: 'Intermediat'
    }
  ];

  const handleApplyNow = () => {
    navigate('/apply');
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Courses</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our cutting-edge courses designed to prepare you for the future of technology
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group"
            >
              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="relative"
                >
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border-2 border-white">
                    <span className="drop-shadow-sm">50% OFF</span>
                  </div>
                  {/* Pulsing effect */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 0.3, 0.7]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-red-500 rounded-full -z-10"
                  />
                </motion.div>
              </div>

              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mr-4">
                    <course.icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {course.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-400">{course.duration}</p>
                  </div>
                  <div className="text-center">
                    <CalendarDays className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-400">{course.Days}</p>
                  </div>
                  <div className="text-center">
                    <Clock5 className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-400">{course.Timing}</p>
                  </div>
                  <div className="text-center">
                    <Award className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-400">{course.level}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleApplyNow}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
                >
                Apply Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;