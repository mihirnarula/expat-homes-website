import Section from './Section';

export default function AboutJa() {
  return (
    <Section id="about" className="bg-orange-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
          会社概要
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          <b>エクスパットホームズ</b>は、外国人駐在員や法人向けに家具付き・設備充実のアパートメントと月極カーレンタルを提供しています。住居探しやご要望に応じた家具一式の手配もサポートします。
        </p>
      </div>
      <a href="https://www.linkedin.com/in/monicakhanna1229/" target="_blank" rel="noopener noreferrer" className="mb-4">
      <div className="max-w-3xl mx-auto mt-12 flex flex-col items-center bg-white rounded-lg shadow p-8">
        <img src="/images/founder.jpg" alt="創業者 Monica Khanna" className="w-32 h-32 rounded-full mb-4 object-cover" />
        <h3 className="text-2xl font-bold text-primary mb-2">モニカ・カンナ 創業者</h3>
        <p className="text-gray-700 text-center">
          サービス業界とエンジニアリング分野で25年以上の経験を持つダイナミックな起業家。エンジニアであり、グルガオンのMDIでMBAを取得。インドで外国人の快適な住まい作りに情熱を注いでいます。彼女のビジョンは、インドに移住する外国人や法人の方々にシームレスな生活環境を提供することです。
        </p>
      </div>
      </a>
    </Section>
  );
} 