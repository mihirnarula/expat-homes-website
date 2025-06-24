import Section from './Section';

export default function AboutKo() {
  return (
    <Section id="about" className="bg-orange-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
          회사 소개
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          <b>엑스팻 홈즈</b>는 외국인 및 기업 고객을 위한 풀퍼니시드 아파트와 월간 차량 렌탈 서비스를 제공합니다. 주거지 탐색 및 맞춤형 가구 제공도 지원합니다.
        </p>
      </div>
      <a href="https://www.linkedin.com/in/monicakhanna1229/" target="_blank" rel="noopener noreferrer" className="mb-4">
      <div className="max-w-3xl mx-auto mt-12 flex flex-col items-center bg-white rounded-lg shadow p-8">
        <img src="/images/founder.jpg" alt="설립자 Monica Khanna" className="w-32 h-32 rounded-full mb-4 object-cover" />
        <h3 className="text-2xl font-bold text-primary mb-2">모니카 칸나, 설립자</h3>
        <p className="text-gray-700 text-center">
          서비스 및 엔지니어링 분야에서 25년 이상의 경력을 가진 역동적인 전문가. 엔지니어이자 구르가온 MDI에서 MBA를 취득. 인도에서 외국인을 위한 쾌적한 주거 환경 조성에 열정을 가지고 있습니다. 그녀의 비전은 인도로 이주하는 외국인과 기업 고객에게 원활한 정착을 제공하는 것입니다.
        </p>
      </div>
      </a>
    </Section>
  );
} 