export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}