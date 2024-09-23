import { DatePicker as AntDatePicker, DatePickerProps } from 'antd';

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  format,
  placeholder,
  className = '',
  ...props
}) => {
  return (
    <AntDatePicker
      className={`py-2 px-3 placeholder-[#667085] ${className}`}
      value={value}
      onChange={onChange}
      format={format}
      placeholder={placeholder}
      {...props}
    />
  );
};
