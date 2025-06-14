import { ButtonProps } from '../utils/types';

export default function Button({ children, variant = 'primary', className = '', onClick, type = 'button', disabled = false }: ButtonProps & { type?: 'button' | 'submit' | 'reset'; disabled?: boolean }) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base';
  const variants = {
    primary: 'bg-orange-400 text-white hover:bg-red-600',
    secondary: 'bg-white text-primary border border-primary hover:bg-primary/5'
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}