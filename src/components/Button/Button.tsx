import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({ icon, children, onClick, ...props }: ButtonProps) => {
  return (
    <button className='bg-[#475467] text-white py-2 px-4 rounded-md' {...props} onClick={onClick}>
      <div className='flex gap-2 items-center'>
        {icon}
        {children}
      </div>
    </button>
  );
};
