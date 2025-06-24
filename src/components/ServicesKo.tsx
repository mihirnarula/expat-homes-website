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
        {isExpanded ? '간략히 보기' : '자세히 보기'}
      </button>
      {isExpanded && (
        <ul className="mt-3 list-disc list-inside text-gray-600 marker:text-accent space-y-1 transition-all duration-300">
          {details.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ServicesKo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: '서비스 아파트',
      description: '구르가온 및 델리의 가구, 시설, 에어컨 완비 주택.',
      icon: <Home className="w-8 h-8" />,
      details: [
        "가구, 시설, 에어컨 완비 아파트.",
        "냉장고, 가스레인지, 전자레인지, 냉동고, 정수기, 공기청정기 등 편의시설.",
        "식기류, 수저류, 유리잔.",
        "LED 스마트 TV 및 Wi-fi.",
        "각 아파트 24시간 보안 및 전력 백업.",
        "침대보, 고급 시트, 베개, 수건을 포함한 완벽한 침구.",
        "매일 하우스키핑 서비스, 주 2회 욕실 타월 교체, 주 1회 침대 시트 교체.",
        "개인 세탁 서비스(추가 비용).",
        "전기 기사, 배관공, 목수 등으로 구성된 완벽한 유지보수 팀.",
        "고객 요구에 부응하는 24/7 헬프 데스크."
      ]
    },
    {
      title: '차량 렌탈',
      description: '영어 구사 가능 운전기사 및 GPS 장착 차량 월간 렌탈.',
      icon: <Car className="w-8 h-8" />,
      details: [
        "외국인 주재원을 위한 월간 렌탈 모델로 차량을 제공합니다.",
        "공항 이동 및 사무실 이동.",
        "이노바 크리스타, 스즈키 디자이어, 스즈키 에르티가, 기아 카니발, 기아 크레타, 혼다 시티 등 모든 차종 보유.",
        "모든 차량에 GPS 장착.",
        "운전기사는 영어를 이해하며 정기적인 교육을 받습니다.",
        "고객 요구에 부응하는 24/7 헬프 데스크.",
        "안전, 시간 엄수, 신뢰성을 신조로 합니다."
      ],
    },
    {
      title: '가구 렌탈',
      description: '단기 또는 장기 체류를 위한 가구 렌탈 가능.',
      icon: <Sofa className="w-8 h-8" />,
      details: [
        '카탈로그에서 고급 침대, 소파, 테이블 및 가전제품 렌탈 가능',
        '유연한 렌탈 기간: 월간/연간',
        '저희 팀이 배송 및 배치',
        '외국인 주재원이나 임시 이주에 이상적',
      ],
    },
  ];

  return (
    <Section id="services">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
        우리의 서비스
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