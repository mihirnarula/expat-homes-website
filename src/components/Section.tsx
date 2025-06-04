import { SectionProps } from '../utils/types';

export default function Section({ id, className = '', children }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-4 md:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}