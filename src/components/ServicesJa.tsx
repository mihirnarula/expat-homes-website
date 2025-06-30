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
        {isExpanded ? '詳細を閉じる' : '詳細を見る'}
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

export default function ServicesJa() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'サービスアパートメント',
      description: 'グルガオンとデリーにある、家具付き・設備完備・エアコン完備の住居。',
      icon: <Home className="w-8 h-8" />,
      details: [
        '冷蔵庫、ガスコンロ、電子レンジ、冷凍庫、浄水器、空気清浄機などの設備',
        '食器、カトラリー、グラス類',
        'LEDスマートテレビとWi-Fi',
        '各アパートメントに24時間セキュリティと電源バックアップ',
        'ベッドカバー、上質なシーツ、枕、タオルを含む完全な寝具一式',
        '毎日のハウスキーピングサービス、週2回のバスタオル交換、週1回のベッドリネン交換',
        '電気技師、配管工、大工などのフルメンテナンスチーム',
        'お客様のニーズに対応する24時間365日のヘルプデスク'
      ]
    },
    {
      title: 'カーレンタル',
      description: '英語対応ドライバー付きの月極レンタル。',
      icon: <Car className="w-8 h-8" />,
      details: [
        '駐在員や法人向けに月極レンタルモデルで車を提供します。',
        'イノーバクリスタ、スズキディザイア、スズキエルティガ、キアカーニバル、ヒュンダイクレタなど全車種を保有',
        'ドライバーは英語を理解し、定期的なトレーニングを受けています。',
        'お客様のニーズに対応する24時間365日のヘルプデスク',
        '安全性、時間厳守、信頼性を重視しています。'
      ],
    },
    {
      title: '家具レンタル',
      description: '一時的または長期滞在用の家具をご利用いただけます。',
      icon: <Sofa className="w-8 h-8" />,
      details: [
        'カタログから高級ベッド、ソファ、テーブル、家電をレンタル可能',
        '柔軟なレンタル期間：月単位／年単位',
        '当社チームによる配送と設置',
        '駐在員や一時的な転勤に最適'
      ],
    },
  ];

  return (
    <Section id="services">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
        私たちのサービス
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