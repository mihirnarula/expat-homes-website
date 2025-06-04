import Section from './Section';

export default function About() {
  return (
    <Section id="about" className="bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Expat Homes offers fully-furnished, well-equipped apartments and monthly car rentals tailored for expats and corporate professionals. We also help with residential searches and provide complete furnishing as per client needs.
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-12 flex flex-col items-center bg-white rounded-lg shadow p-8">
        <img src="/images/founder.jpg" alt="Founder Monica Khanna" className="w-32 h-32 rounded-full mb-4 object-cover" />
        <h3 className="text-2xl font-bold text-primary mb-2">Monica Khanna, Founder</h3>
        <p className="text-gray-700 text-center">
          A dynamic enterprising professional with 25+ of experience in Services and Engineering Sectors. Adept at Business Strategy, Profit Center Management, Profit Maximization, Go-to-market Plan, Market Expansion, Revenue Maximization, Sales Leadership, Operational Excellence, Operations Management, Customer Retention, B2B Business Development, Client Relations and Vendor Management. Demonstrated success in Sustainable Process Improvement, Training and Mentoring large cross-functional Teams, CRM Customer Engagement, Statutory Compliances enhancing organizational value and performance. Accountable for network building and business relationships. Ability to support and sustain a positive work environment that fosters team performance with strong communication and relationship management skills.
        </p>
      </div>
    </Section>
  );
}