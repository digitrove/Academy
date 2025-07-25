import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, User, Mail, Phone, MapPin, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    age: '',
    gender: '',
    location: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzAp1BGglcpFIgXqGVRYjQnVQ6LvOdqKvGwE-9axkALw3XXjQMIuBfUjVhmPW5PpbLJ-w/exec';

  const courses = [
    'Digital Marketing + AI',
    'Graphic Animation + AI',
    'CIT (Computer Information Technology) + AI',
    'Web Development + AI',
    'AI + Agentic AI',
    'Shopify + Dropshipping',
    "Free Webinar"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Primary method: Use fetch with no-cors mode and FormData
      try {
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formDataToSend.append(key, value);
        });

        await fetch(scriptURL, {
          method: 'POST',
          mode: 'no-cors',
          body: formDataToSend,
        });

        // Success - show alert and reset form
        alert('Application submitted successfully! We will contact you soon.');
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          course: '',
          age: '',
          gender: '',
          location: ''
        });
      } catch (fetchError) {
        console.error('Fetch failed, trying fallback method:', fetchError);
        
        // Fallback method: Create and submit hidden HTML form
        const fallbackForm = document.createElement('form');
        fallbackForm.action = scriptURL;
        fallbackForm.method = 'POST';
        fallbackForm.style.display = 'none';
        
        // Add form fields
        Object.entries(formData).forEach(([key, value]) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = value;
          fallbackForm.appendChild(input);
        });
        
        // Submit form
        document.body.appendChild(fallbackForm);
        fallbackForm.submit();
        document.body.removeChild(fallbackForm);
        
        // Success - show alert and reset form
        alert('Application submitted successfully! We will contact you soon.');
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          course: '',
          age: '',
          gender: '',
          location: ''
        });
      }
    } catch (error) {
      console.error('Both submission methods failed:', error);
      alert('Failed to submit application. Please try again or contact us directly.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="flex items-center text-black hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-2xl font-bold text-black">Application Form</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="Full Name *" icon={<User />} name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" />
              <InputField label="Email Address *" icon={<Mail />} name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Enter your email" />
              <InputField label="Phone Number *" icon={<Phone />} name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="Enter your phone number" />
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Selected Course *</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select a course</option>
                  {courses.map(course => <option key={course} value={course}>{course}</option>)}
                </select>
              </div>

              <InputField label="Age *" icon={<Calendar />} name="age" value={formData.age} onChange={handleInputChange} type="number" placeholder="Enter your age" />
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2"><Users className="w-4 h-4 inline mr-2" />Gender *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <InputField label="Location *" icon={<MapPin />} name="location" value={formData.location} onChange={handleInputChange} placeholder="Enter your city/location" />

            {submitStatus === 'success' && (
              <div className="bg-green-800 border border-green-600 text-green-200 px-4 py-3 rounded-lg">
                Application submitted successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-800 border border-red-600 text-red-200 px-4 py-3 rounded-lg">
                Submission failed. Please try again.
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-700 disabled:opacity-50 flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent" />
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

// Reusable InputField Component
const InputField = ({ label, icon, name, value, onChange, placeholder, type = "text" }: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">
      {icon} {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400"
      placeholder={placeholder}
    />
  </div>
);

export default ApplicationForm;
