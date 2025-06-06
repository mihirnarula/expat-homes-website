import { ButtonProps } from '../utils/types';

export default function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base';
  const variants = {
    primary: 'bg-orange-400 text-white hover:bg-red-600',
    secondary: 'bg-white text-primary border border-primary hover:bg-primary/5'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}