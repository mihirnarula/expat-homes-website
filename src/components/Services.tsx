import { Home, Car, Sofa } from 'lucide-react';
import Section from './Section';
import { ServiceCardProps } from '../utils/types';

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: 'Serviced Apartments',
      description: 'Fully furnished, equipped & air-conditioned homes in Gurgaon & Delhi.',
      icon: <Home className="w-8 h-8" />
    },
    {
      title: 'Car Rentals',
      description: 'Monthly rentals with English-speaking drivers & GPS-enabled cars.',
      icon: <Car className="w-8 h-8" />
    },
    {
      title: 'Furniture Rentals',
      description: 'Furniture available for temporary or long-term stays.',
      icon: <Sofa className="w-8 h-8" />
    }
  ];

  return (
    <Section id="services">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </Section>
  );
}