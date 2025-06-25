import { useState } from 'react';
import Section from './Section';
import Button from './Button';
import { Phone, Mail } from 'lucide-react';

export default function ContactJa() {
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
      await fetch('https://formsubmit.co/ajax/sales@expat-homes.in', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      });
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" className="bg-orange-100">
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto items-start">
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-4xl font-display font-bold text-primary mb-6 text-left">お問い合わせ</h2>
          <p className="mb-6 text-lg text-gray-700 text-left">物件やサービスに関するご質問は、<br />お気軽にお問い合わせください。</p>
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <Phone className="text-[2rem] text-accent" />
              <span className="text-primary font-semibold text-lg">+91 9911005759</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-[2rem] text-accent" />
              <span className="text-primary font-semibold text-lg">sales@expat-homes.in</span>
            </div>
            <a href="https://wa.me/919911005759" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                <img src="/images/whatsapp.png" alt="WhatsApp Icon" className="w-40 h-full" />

              <span className="text-primary font-semibold text-lg group-hover:text-accent transition-colors">（ワッツアップ）</span>
            </a>
          </div>
        </div>
        <form className="flex-1 space-y-6 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 font-semibold text-primary">お名前</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-base" />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-primary">メールアドレス</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-base" />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-primary">メッセージ</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-base" />
            </div>
          </div>
          <div className="pt-2">
            <Button type="submit" className="w-full flex items-center justify-center text-lg font-semibold bg-accent hover:bg-accent/90" disabled={loading} variant="primary">
              {loading && <span className="spinner mr-2"></span>}
              メッセージを送信
            </Button>
          </div>
          {success && <div className="success-message text-green-600 text-center font-semibold mt-4">ありがとうございます！メッセージは正常に送信されました。</div>}
        </form>
      </div>
    </Section>
  );
} 