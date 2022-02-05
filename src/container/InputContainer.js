import { useDispatch, useSelector } from 'react-redux';

import Input from '../components/Input';

import { insertZipCode, selectZipCode } from '../redux/addressSlice';

const InputContainer = ({ placeholder, type }) => {
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(insertZipCode({ zipCode: e.target.value }));
  const value = useSelector(selectZipCode);

  return <Input placeholder={placeholder} value={value} type={type} onChange={onChange} />;
};

export default InputContainer;
