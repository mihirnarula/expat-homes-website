import React from 'react';
import { FurnishingItem } from '../utils/types';

const FurnishingsKo: React.FC = () => {
    const furnishings: FurnishingItem[] = [
        { id: 1, imageUrl: "/furnishings/1.jpg", propertyName: "DLF Crest", roomType: "침실", alt: "DLF Crest 침실 가구 완비 아파트" },
        { id: 2, imageUrl: "/furnishings/2.jpg", propertyName: "DLF Park Place", roomType: "거실", alt: "DLF Park Place 거실 가구 완비 아파트" },
        { id: 3, imageUrl: "/furnishings/3.jpg", propertyName: "DLF Ultima", roomType: "침실", alt: "DLF Ultima 침실 가구 완비 아파트" },
        { id: 4, imageUrl: "/furnishings/4.jpg", propertyName: "DLF Park Place", roomType: "거실", alt: "DLF Park Place 거실 가구 완비 아파트" },
        { id: 5, imageUrl: "/furnishings/5.jpg", propertyName: "DLF Park Place", roomType: "거실", alt: "DLF Park Place 거실 가구 완비 아파트" },
        { id: 6, imageUrl: "/furnishings/6.jpg", propertyName: "DLF Crest", roomType: "침실", alt: "DLF Crest 침실 가구 완비 아파트" },
        { id: 7, imageUrl: "/furnishings/7.jpg", propertyName: "DLF Park Place", roomType: "식사 공간", alt: "DLF Park Place 식사 공간 가구 완비 아파트" },
        { id: 8, imageUrl: "/furnishings/8.jpg", propertyName: "DLF Belaire", roomType: "거실", alt: "DLF Belaire 거실 가구 완비 아파트" },
        { id: 9, imageUrl: "/furnishings/9.jpg", propertyName: "DLF Crest", roomType: "거실", alt: "DLF Crest 거실 가구 완비 아파트" },
        { id: 10, imageUrl: "/furnishings/10.jpg", propertyName: "Emaar Digi Homes", roomType: "거실", alt: "Emaar Digi Homes 거실 가구 완비 아파트" },
        { id: 11, imageUrl: "/furnishings/11.jpg", propertyName: "DLF Crest", roomType: "침실", alt: "DLF Crest 침실 가구 완비 아파트" },
        { id: 12, imageUrl: "/furnishings/12.jpg", propertyName: "DLF Crest", roomType: "거실", alt: "DLF Crest 거실 가구 완비 아파트" }
    ];

  return (
    <section className="py-20 px-6 bg-orange-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6 tracking-wide">
            가구 완비 아파트
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            안목 있는 외국인 주재원을 위해 디자인된 세심하게 가구가 비치된 아파트를 만나보세요.
            <br />
            각 공간은 고급스러움과 기능성을 겸비하여 인도의 새 집으로 원활하게 전환할 수 있도록 보장합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {furnishings.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

export default FurnishingsKo; 