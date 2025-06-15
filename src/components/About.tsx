import Section from './Section';

export default function About() {
  return (
    <Section id="about" className="bg-orange-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          <b> Expat Homes </b> offers fully-furnished, well-equipped apartments and monthly car rentals tailored for expats and corporate professionals. We also help with residential searches and provide complete furnishing as per client needs.
        </p>
      </div>
      <a href="https://www.linkedin.com/in/monicakhanna1229/" target="_blank" rel="noopener noreferrer" className="mb-4">
      <div className="max-w-3xl mx-auto mt-12 flex flex-col items-center bg-white rounded-lg shadow p-8">
        <img src="/images/founder.jpg" alt="Founder Monica Khanna" className="w-32 h-32 rounded-full mb-4 object-cover" />
        <h3 className="text-2xl font-bold text-primary mb-2">Monica Khanna, Founder</h3>
        <p className="text-gray-700 text-center">
          A dynamic enterprising professional with 25+ years of experience in Services and Engineering Sectors. An engineer with an MBA from Management Development Institute, Gurgaon,
          Monica is passionate about creating comfortable living spaces for expats in India. Her vision is to provide a seamless transition for expatriates and corporate professionals relocating to India.
        </p>
      </div>
      </a>
    </Section>
  );
}