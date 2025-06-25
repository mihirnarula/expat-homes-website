import Marquee from "react-fast-marquee";
import Section from "./Section";

const logos = [
  "/client images/Picture1-Kita.png",
  "/client images/Picture2-lotte.png",
  "/client images/Picture3-yaskawa.png",
  "/client images/Picture4-hyundai.png",
  "/client images/Picture5-kobelco.png",
  "/client images/Picture6-dyninno.png",
  "/client images/Picture7-samsung.png",
  "/client images/Picture8-ksure.png",
  "/client images/Picture9-hamabo.png",
  "/client images/Picture10-munjalkiriu.png",
  "/client images/Picture11-nri.png",
  "/client images/Picture12-svam-toyal.png",
  "/client images/Picture13-nihonkohden.png",
];

interface ClientLogosProps {
  title: string;
}

export default function ClientLogos({ title }: ClientLogosProps) {
  return (
    <Section id="clients">
      <div className="text-center">
        <h2 className="text-3xl font-display font-bold text-primary mb-8">{title}</h2>
      </div>
      <div className="py-8">
        <Marquee gradient={false} speed={50}>
          {logos.map((logo, index) => (
            <div key={index} className="mx-8">
              <img src={logo} alt={`Client logo ${index + 1}`} className="h-16 object-contain" />
            </div>
          ))}
        </Marquee>
      </div>
    </Section>
  );
} 