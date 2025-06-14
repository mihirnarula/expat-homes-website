import { useState } from 'react';
import Section from './Section';
import Button from './Button';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <Section id="contact">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
          For Inquiries
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <Phone className="text-accent" />
            <span className="text-primary font-semibold">Monica Khanna: +91 9911005759</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Mail className="text-accent" />
            <span className="text-primary font-semibold">info@expathomes.com</span>
          </div>
        </div>
      </div>
    </Section>
  );
}