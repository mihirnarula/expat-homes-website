import Button from './Button';

export default function HeroJa() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg')] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg')" }}
      >
        <div className="absolute inset-0 bg-orange-400/70"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            エクスパット・法人向け高級サービスアパートとカーレンタル
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            インドの高級住宅地で、第二の我が家を見つけましょう
          </p>
          <Button onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}>
            物件を探す
          </Button>
        </div>
      </div>
    </section>
  );
} 