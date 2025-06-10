import Section from './Section';
import { useRef } from 'react';

const properties = [
  {
    name: 'DLF Park Place, DLF 5, Gurgaon',
    image: '/EH Properties/DLF Park Place.jpg',
    map: 'https://g.co/kgs/i2Xxa2S',
  },
  {
    name: 'DLF Crest, DLF 5, Gurgaon',
    image: '/EH Properties/DLF Crest.jpg',
    map: 'https://g.co/kgs/g1Uefw7',
  },
  {
    name: 'DLF Bellaire, Gurgaon',
    image: '/EH Properties/DLF Belaire.jpg',
    map: 'https://g.co/kgs/TnioUsk',
  },
  {
    name: 'DLF Ultima , Sector 81, Gurgaon',
    image: '/EH Properties/DLF Ultima.jpg',
    map: 'https://g.co/kgs/u4aXPqU',
  },
  {
    name: 'DLF Primus, Sector 80, Gurgaon',
    image: '/EH Properties/DLF Primus.jpg',
    map: 'https://g.co/kgs/hsmgbc7',
  },
  {
    name: 'Central Park, Sohna Road, Gurgaon',
    image: '/EH Properties/Central Park Resorts.jpg',
    map: 'https://g.co/kgs/2YU4N4B',
  },
  {
    name: 'GK-3, New Delhi',
    image: '/EH Properties/GK3.jpg',
    map: 'https://maps.app.goo.gl/DzAX4fLWeEthcT9S9',
  },
  {
    name: 'Vasant Vihar, New Delhi',
    image: '/EH Properties/Vasant Vihar.jpg',
    map: 'https://g.co/kgs/6Es4RDb',
  },
  {
    name: 'Defence Colony, New Delhi',
    image: '/EH Properties/Def Col.jpg',
    map: 'https://maps.app.goo.gl/mxpnbTkDcyFgtJ9P7',
  },
  {
    name: 'TDI Ourania, Gurgaon',
    image: '/EH Properties/TDI Ourania.jpeg',
    map: 'https://maps.app.goo.gl/XovAXvcmKfTdX4NR7',
  },
  {
    name: 'IREO Grand Arch, Gurgaon',
    image: '/EH Properties/Grand-Arch.jpg',
    map: 'https://maps.app.goo.gl/PDcYD3otAgt5ZwQr6',
  },
  {
    name: 'Emaar Digi Homes, Gurgaon',
    image: '/EH Properties/Emaar Digi Homes.jpg',
    map: 'https://g.co/kgs/c17cCHb',
  },
  {
    name: 'M3M Estate. Gurgaon',
    image: '/EH Properties/m3m-heights-picture.jpg',
    map: 'https://g.co/kgs/ZCLM2Mc',
  },
];

export default function PropertyLocations() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Section id="locations" className="bg-orange-100">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-8">
        Property Locations
      </h2>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hidden md:block"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          &#8592;
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-accent/60 scrollbar-track-transparent"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {properties.map((property, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-xs bg-white rounded-lg shadow hover:shadow-md transition-shadow flex-shrink-0 flex flex-col items-center p-4"
              style={{ scrollSnapAlign: 'start' }}
            >
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-40 object-cover rounded mb-3"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-primary text-center mb-2">{property.name}</h3>
              <a
                href={property.map}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline text-sm"
              >
                View on Google Maps
              </a>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hidden md:block"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          &#8594;
        </button>
      </div>
    </Section>
  );
}