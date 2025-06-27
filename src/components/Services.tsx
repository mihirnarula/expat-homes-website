import { useState } from 'react';
import { Home, Car, Sofa } from 'lucide-react';
import Section from './Section';

type ServiceCardProps = {
  title: string;
  description: string;
  details: string[];
  icon: JSX.Element;
  isExpanded: boolean;
  onToggle: () => void;
};

function ServiceCard({ title, description, details, icon, isExpanded, onToggle }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-accent mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>

      <button
        className="text-sm text-accent font-semibold hover:underline focus:outline-none"
        onClick={onToggle}
      >
        {isExpanded ? 'Read less' : 'Read more'}
      </button>

      {isExpanded && (
        <ul className="mt-1 list-disc list-inside text-justify text-gray-600 marker:text-accent space-y-1 transition-all duration-300">
          {details.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Serviced Apartments',
      description: 'Fully furnished, equipped & air-conditioned homes in Gurgaon & Delhi.',
      icon: <Home className="w-8 h-8" />,
      details: [
        "Amenities like fridge, gas stove, microwave, deep freezer, water filter, air purifier, etc.",
        "Crockery, cutlery and glassware",
        "LED Smart TV and wi-fi",
        "24 hours security and power backup in each apartment.",
        "Complete bedding with bedspread, upgraded sheets, pillows, and towels",
        "Daily housekeeping service, biweekly change of bathroom towels, changing of bed linen once a week.",
        "Full maintenance team of electricians, plumbers, carpenters etc.",
        "24x7 Help Desk to cater to client needs."
      ]
    },
    {
      title: 'Car Rentals',
      description: 'Monthly rentals with English-speaking drivers.',
      icon: <Car className="w-8 h-8" />,
      details: [
        "We provide cars on monthly rental models for expats and corporates.",
        "Our Fleet has all variants- Innova Crysta, Suzuki Dzire, Suzuki Ertiga, Kia Carnival, Hyundai Creta, etc.",
        "Our Drivers understand English and undergo regular training.",
        "We have a 24x7 Help Desk to cater to client needs.",
        "We believe in safety, punctuality and reliability."
      ],
    },
    {
      title: 'Furniture Rentals',
      description: 'Furniture available for temporary or long-term stays.',
      icon: <Sofa className="w-8 h-8" />,
      details: [
        'Premium beds, sofas, tables & appliances, can be rented from our catalog',
        'Flexible rental duration: monthly/yearly',
        'Delivered and arranged by our team',
        'Ideal for expats or temporary relocations',
      ],
    },
  ];

  return (
    <Section id="services">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            isExpanded={activeIndex === index}
            onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
          />
        ))}
      </div>
    </Section>
  );
}
