import { cva } from 'class-variance-authority';

// Define the button styles with cva
const buttonVariants = cva(
  'cursor-pointer text-sm font-medium leading-6 h-11 font-inter inline-block relative overflow-hidden border border-black rounded-full text-white bg-black transition-all duration-200',
  {
    variants: {
      size: {
        sm: 'w-[140px]',
        md: 'w-[162px]',
        lg: 'w-[200px]',
      },
      animated: {
        true: 'group', // Enable group-hover when animated is true
        false: '', // No group class when animated is false
      },
    },
    defaultVariants: {
      size: 'md',
      animated: true, // Default to animated
    },
  }
);

export const Button = ({ children, size, animated, className, ...props }) => {
  return (
    <button
      className={buttonVariants({ size, animated, className })}
      {...props}
    >
      {/* Background animation layer (only when animated is true) */}
      {animated && (
        <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
      )}
      {/* Content with conditional text color change */}
      <span
        className={`relative z-10 ${animated ? 'group-hover:text-black' : ''}`}
      >
        {children}
      </span>
    </button>
  );
};
