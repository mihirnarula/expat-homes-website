import React from 'react';

interface FurnishingItem {
  id: number;
  imageUrl: string;
  propertyName: string;
  roomType: string;
  alt: string;
}

const Furnishings: React.FC = () => {
  // Sample data - replace with your actual furnished apartment images
  const furnishings: FurnishingItem[] = [
    {
      id: 1,
      imageUrl: "/furnishings/1.jpg",
      propertyName: "DLF Crest",
      roomType: "Bedroom",
      alt: "DLF Crest Bedroom furnished apartment"
    },
    {
      id: 2,
      imageUrl: "/furnishings/2.jpg",
      propertyName: "DLF Park Place",
      roomType: "Living Room",
      alt: "DLF Park Place Living Room furnished apartment"
    },
    {
      id: 3,
      imageUrl: "/furnishings/3.jpg",
      propertyName: "DLF Ultima",
      roomType: "Bedroom",
      alt: "DLF Ultima Bedroom furnished apartment"
    },
    {
      id: 4,
      imageUrl: "/furnishings/4.jpg",
      propertyName: "DLF Park Place",
      roomType: "Living Room",
      alt: "DLF Park Place Living Room furnished apartment"
    },
    {
      id: 5,
      imageUrl: "/furnishings/5.jpg",
      propertyName: "DLF Park Place",
      roomType: "Living Room",
      alt: "DLF Park Place Living Room furnished apartment"
    },
    {
      id: 6,
      imageUrl: "/furnishings/6.jpg",
      propertyName: "DLF Crest",
      roomType: "Bedroom",
      alt: "DLF Crest Bedroom furnished apartment"
    },
    {
      id: 7,
      imageUrl: "/furnishings/7.jpg",
      propertyName: "DLF Park Place",
      roomType: "Dining Area",
      alt: "DLF Park Place Dining Area furnished apartment"
    },
    {
      id: 8,
      imageUrl: "/furnishings/8.jpg",
      propertyName: "DLF Belaire",
      roomType: "Living Room",
      alt: "DLF Belaire Living Room furnished apartment"
    },
    {
      id: 9,
      imageUrl: "/furnishings/9.jpg",
      propertyName: "DLF Crest",
      roomType: "Living Room",
      alt: "DLF Crest Living Room furnished apartment"
    },
    {
      id: 10,
      imageUrl: "/furnishings/10.jpg",
      propertyName: "Emaar Digi Homes",
      roomType: "Living Room",
      alt: "Emaar Digi Homes Living Room furnished apartment"
    },
    {
      id: 11,
      imageUrl: "/furnishings/11.jpg",
      propertyName: "DLF Crest",
      roomType: "Bedroom",
      alt: "DLF Crest Bedroom furnished apartment"
    },
    { id: 12,
      imageUrl: "/furnishings/12.jpg",
      propertyName: "DLF Crest",
      roomType: "Living Room",
      alt: "DLF Crest Living Room furnished apartment"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6 tracking-wide">
            Our Furnished Apartments
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our meticulously furnished apartments designed for the discerning expat. 
            <br />
            Each space combines luxury with functionality, ensuring a seamless transition to your new home in India.
          </p>
        </div>

        {/* Furnishings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {furnishings.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Caption Box */}
                <div className="absolute bottom-0 left-0 right-0 bg-neutral-100 rounded-lg mx-4 mb-4 p-2 shadow-xl transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <h3 className="font-semibold font-display text-gray-900 text-base mb-1">
                    {item.propertyName} {item.roomType}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Furnishings;