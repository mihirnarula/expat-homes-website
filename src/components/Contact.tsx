import { useState } from 'react';
import Section from './Section';
import Button from './Button';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    try {
      await fetch('https://formsubmit.co/ajax/mihirnarula@gmail.com', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      });
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch {
      // Optionally handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto items-start">
        {/* Contact Info */}
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-4xl font-display font-bold text-primary mb-6 text-left">For Inquiries</h2>
          <p className="mb-6 text-lg text-gray-700 text-left">Have questions about our properties or services?<br />Contact us today.</p>
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <Phone className="text-[2rem] text-accent" />
              <span className="text-primary font-semibold text-lg">Monica Khanna: +91 9911005759</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-[2rem] text-accent" />
              <span className="text-primary font-semibold text-lg">info@expathomes.com</span>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <form className="flex-1 space-y-6 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 font-semibold text-primary">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-base" />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-primary">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-base" />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-primary">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-base" />
            </div>
          </div>
          <div className="pt-2">
            <Button type="submit" className="w-full flex items-center justify-center text-lg font-semibold bg-accent hover:bg-accent/90" disabled={loading} variant="primary">
              {loading && <span className="spinner mr-2"></span>}
              Send Message
            </Button>
          </div>
          {success && <div className="success-message text-green-600 text-center font-semibold mt-4">Thank you! Your message has been sent.</div>}
        </form>
      </div>
    </Section>
  );
}