import Section from './Section';

export default function PropertyLocations() {
  const locations = [
    'DLF Park Place, DLF 5, Gurgaon',
    'DLF Crest, DLF 5, Gurgaon',
    'DLF Bellaire, Gurgaon',
    'DLF Ultima , Sector 81, Gurgaon',
    'DLF Primus, Sector 80, Gurgaon',
    'Central Park, Sohna Road, Gurgaon',
    'GK-3, New Delhi',
    'Vasant Vihar, New Delhi',
    'Defence Colony, New Delhi',
    'TDI Ourania, Gurgaon',
    'IREO Grand Arch, Gurgaon',
    'Emaar MGF Vilas, DLF2, Gurgaon',
    'M3M Estate. Gurgaon'
  ];

  return (
    <Section id="locations" className="bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
        Property Locations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center"
          >
            <h3 className="text-lg font-semibold text-primary">{location}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}