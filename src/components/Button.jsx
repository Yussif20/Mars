import { cva } from 'class-variance-authority';

// Define the button styles with cva
const buttonVariants = cva(
  'cursor-pointer text-sm font-medium leading-6 h-11 font-inter inline-block relative overflow-hidden border border-black rounded-full text-white bg-black group transition-all duration-200',
  {
    variants: {
      size: {
        sm: 'w-[100px]',
        md: 'w-[162px]',
        lg: 'w-[200px]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const Button = ({ children, size, className, ...props }) => {
  return (
    <button className={buttonVariants({ size, className })} {...props}>
      {/* Background animation layer */}
      <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
      {/* Content with z-index to stay above animation */}
      <span className="relative z-10 group-hover:text-black">{children}</span>
    </button>
  );
};
