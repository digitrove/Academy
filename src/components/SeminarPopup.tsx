import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SeminarPopupProps {
  onClose: () => void;
}

const SeminarPopup: React.FC<SeminarPopupProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    onClose();
    navigate('/apply');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Popup Content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-yellow-400/20"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-black hover:text-gray-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center">
              <Award className="w-8 h-8 text-black mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-black">Special Student Seminar</h2>
                <p className="text-black/80">Exclusive AI & Technology Workshop</p>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)] ">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">
                  🚀 Launch Your Tech Career with AI
                </h3>
                <p className="text-gray-300 text-lg">
                 Join our free seminar and learn how computer courses can change your life. We offer online and physical classes with hands-on training. After completing the course, we offer 100% job placement in our own digital agency. Special scholarships available for Huffaz, Aalims, and students with financial need.
                                        🕒 Every Saturday | 🏢 Free Entry.
                </p>
                <p className='text-white text-md font-border'>
                  🔔 ہفتہ وار مفت سیمینار
ہنر سیکھیں – اپنا مستقبل بنائیں!
ہماری مفت سیمینار میں شامل ہوں اور جانیں کہ کمپیوٹر کورسز کیسے آپ کی زندگی بدل سکتے ہیں۔ ہمارے کورسز آن لائن اور فزیکل دونوں طریقوں سے دستیاب ہیں، مکمل پریکٹیکل ٹریننگ کے ساتھ۔
کورس مکمل کرنے کے بعد ہم اپنی ڈیجیٹل ایجنسی میں 100٪ نوکری دیتے ہیں۔
حفاظ، علما اور مالی مسائل کے شکار طلبہ کے لیے خصوصی اسکالرشپ بھی دستیاب ہے۔

🕒 .ہر ہفتے، ہفتہ کے دن |    شرکت بالکل مفت                       

                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <Calendar className="w-6 h-6 text-yellow-400 mb-2" />
                  <h4 className="font-bold text-white mb-1">Date & Time</h4>
                  <h2 className='font-semibold'>Every Saturday</h2>
                  <p className="text-gray-300"> Afternoon, 2:00 PM - 4:00 PM</p>
                  <p className='text-gray-300'>Night 10:00 PM - 12:00 AM</p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <Clock className="w-6 h-6 text-yellow-400 mb-2" />
                  <h4 className="font-semibold text-white mb-1">Duration</h4>
                  <p className="text-gray-300">2 Hours Interactive Session</p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <Users className="w-6 h-6 text-yellow-400 mb-2" />
                  <h4 className="font-semibold text-white mb-1">Limited Seats</h4>
                  <p className="text-gray-300">Only 25 Students Per Session</p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <Award className="w-6 h-6 text-yellow-400 mb-2" />
                  <h4 className="font-semibold text-white mb-1">Certificate</h4>
                  <p className="text-gray-300">Participation Certificate</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 p-4 rounded-lg border border-yellow-400/30">
                <h4 className="font-bold text-yellow-400 mb-3">What You'll Learn:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• What is AI and how it is changing the tech world</li>
                  <li>• Which computer courses are most in demand today</li>
                  <li>• Real career opportunities after learning these skills</li>
                  <li>• How much you can earn after the course</li>
                  <li>• Complete roadmap from learning to getting a job</li>
                  <li>• Internship + 100% job opportunity in our own agency</li>
                  <li>• How to apply for special scholarships (for Huffazz & Aalims)</li>
                </ul>
              </div>

              <div className="text-center bg-gray-800/30 p-4 rounded-lg">
                <p className="text-gray-400 mb-2">Registration Fee:</p>
                <p className="text-3xl font-bold text-white">
                  <span className="text-yellow-400">100% FREE</span>
                </p>
                <p className='text-sm'>No hidden Charges & No hidden Fee</p>
                <p className="text-sm text-gray-400">Limited time offer for first-time attendees</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 bg-gray-800/50 border-t border-gray-700">
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleApplyNow}
                className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
              >
                Apply Now - FREE
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 transition-colors"
              >
                Maybe Later
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SeminarPopup;