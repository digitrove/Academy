import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_digitrove';
const EMAILJS_TEMPLATE_ID = 'template_contact';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''; // Use environment variable

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  const templateParams = {
    to_email: 'contactacademy@digitrove.site',
    subject: `Website Contact: ${formData.subject}`,
    fullName: formData.name,
    email: formData.email,
    message: formData.message,
    // Additional fields for the email template
    from_name: formData.name,
    from_email: formData.email,
    user_subject: formData.subject
  };

  try {
    // Check if EmailJS is properly configured
    if (!EMAILJS_PUBLIC_KEY) {
      throw new Error('EmailJS public key not configured. Please set VITE_EMAILJS_PUBLIC_KEY in your environment variables.');
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    
    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }
    
    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};

// Alternative method using a fallback service
export const sendContactEmailFallback = async (formData: ContactFormData): Promise<void> => {
  // This creates a mailto link as a fallback with the exact format you specified
  const subject = encodeURIComponent(`Website Contact: ${formData.subject}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Message:\n${formData.message}`
  );
  
  const mailtoLink = `mailto:contactacademy@digitrove.site?subject=${subject}&body=${body}`;
  window.open(mailtoLink, '_blank');
};