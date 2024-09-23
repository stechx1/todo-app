import { Checkbox as AntCheckbox, CheckboxProps } from 'antd';

export const Checkbox: React.FC<CheckboxProps> = ({
  children,
  onChange,
  ...props
}) => {
  return (
    <AntCheckbox onChange={onChange} {...props}>
      {children}
    </AntCheckbox>
  );
};
