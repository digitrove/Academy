# Digitrove - AI-Powered Computer Training Center

A modern, responsive landing page for Digitrove computer training center built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with smooth animations
- 📱 Mobile-first approach
- 🚀 Built with React 18 and TypeScript
- 💨 Tailwind CSS for styling
- 📧 Email integration with EmailJS
- 🎭 Framer Motion animations
- 📝 Contact form with validation
- 🎯 Course application system

## Email Setup Instructions

To enable email functionality for the contact form:

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new service (Gmail, Outlook, etc.)
4. Create an email template

### 2. Configure EmailJS Template
Create a template with these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message
- `{{to_email}}` - Recipient email (contactacademy@digitrove.site)

### 3. Update Configuration
Replace the placeholder values in `src/services/emailService.ts`:
- `EMAILJS_SERVICE_ID` - Your service ID
- `EMAILJS_TEMPLATE_ID` - Your template ID  
- `EMAILJS_PUBLIC_KEY` - Your public key

### 4. Environment Variables (Optional)
For production, consider using environment variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Courses.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SeminarPopup.tsx
├── pages/              # Page components
│   ├── LandingPage.tsx
│   └── ApplicationForm.tsx
├── services/           # External service integrations
│   └── emailService.ts
└── App.tsx            # Main app component
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **EmailJS** - Email service integration
- **Lucide React** - Icon library
- **React Router** - Client-side routing
- **Vite** - Build tool

## Contact

For any questions or support, please contact us at contactacademy@digitrove.site