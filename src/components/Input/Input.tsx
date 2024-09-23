interface InputProps {
  type?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      required
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className='border rounded-lg placeholder-[#667085] py-2 px-3 border-[#D0D5DD]'
    />
  );
};
