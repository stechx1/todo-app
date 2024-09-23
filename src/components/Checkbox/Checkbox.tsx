import { Checkbox as AntCheckbox, CheckboxProps } from 'antd';

export const Checkbox: React.FC<CheckboxProps> = ({
  children,
  onChange,
  ...props
}) => {
  return (
    <AntCheckbox className='font-medium text-[16px]' onChange={onChange} {...props}>
      {children}
    </AntCheckbox>
  );
};
