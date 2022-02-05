import { SInput } from './styled';

const Input = ({ placeholder, onChange, value, type }) => {
  return (
    <SInput
      mask="99999-999"
      maskPlaceholder="-"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
};

export default Input;
