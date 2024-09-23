export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className='border rounded-lg placeholder-[#667085] py-2 px-3 border-[#D0D5DD]'
      {...props}
    />
  );
};
