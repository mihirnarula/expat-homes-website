import React from 'react';
import { FurnishingItem } from '../utils/types';

const FurnishingsJa: React.FC = () => {
  const furnishings: FurnishingItem[] = [
        { id: 1, imageUrl: "/furnishings/1.png", propertyName: "DLF Crest", roomType: "寝室", alt: "DLF Crest 寝室 家具付きアパート" },
        { id: 2, imageUrl: "/furnishings/2.png", propertyName: "DLF Park Place", roomType: "リビングルーム", alt: "DLF Park Place リビングルーム 家具付きアパート" },
        { id: 3, imageUrl: "/furnishings/3.png", propertyName: "DLF Ultima", roomType: "寝室", alt: "DLF Ultima 寝室 家具付きアパート" },
        { id: 4, imageUrl: "/furnishings/4.png", propertyName: "DLF Park Place", roomType: "リビングルーム", alt: "DLF Park Place リビングルーム 家具付きアパート" },
        { id: 5, imageUrl: "/furnishings/5.png", propertyName: "DLF Park Place", roomType: "リビングルーム", alt: "DLF Park Place リビングルーム 家具付きアパート" },
        { id: 6, imageUrl: "/furnishings/6.png", propertyName: "DLF Crest", roomType: "寝室", alt: "DLF Crest 寝室 家具付きアパート" },
        { id: 7, imageUrl: "/furnishings/7.png", propertyName: "DLF Park Place", roomType: "ダイニングエリア", alt: "DLF Park Place ダイニングエリア 家具付きアパート" },
        { id: 8, imageUrl: "/furnishings/8.png", propertyName: "DLF Belaire", roomType: "リビングルーム", alt: "DLF Belaire リビングルーム 家具付きアパート" },
        { id: 9, imageUrl: "/furnishings/9.png", propertyName: "DLF Crest", roomType: "リビングルーム", alt: "DLF Crest リビングルーム 家具付きアパート" },
        { id: 10, imageUrl: "/furnishings/10.png", propertyName: "Emaar Digi Homes", roomType: "リビングルーム", alt: "Emaar Digi Homes リビングルーム 家具付きアパート" },
        { id: 11, imageUrl: "/furnishings/11.png", propertyName: "DLF Crest", roomType: "寝室", alt: "DLF Crest 寝室 家具付きアパート" },
        { id: 12, imageUrl: "/furnishings/12.png", propertyName: "DLF Crest", roomType: "リビングルーム", alt: "DLF Crest リビングルーム 家具付きアパート" }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6 tracking-wide">
            家具付きアパートメント
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            目の肥えた駐在員のためにデザインされた、細部にまでこだわった家具付きアパートメントをご覧ください。
            <br />
            各スペースは豪華さと機能性を兼ね備え、インドでの新しい住まいへのスムーズな移行をお約束します。
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

export default FurnishingsJa; 