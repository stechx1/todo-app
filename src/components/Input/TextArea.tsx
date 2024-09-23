export const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  placeholder,
  rows = 4,
  ...props
}) => {
  return (
    <textarea 
      placeholder={placeholder}
      rows={rows}
      className='border rounded-lg placeholder-[#667085] py-2 px-3 border-[#D0D5DD]'
      {...props}
    />
  );
};
