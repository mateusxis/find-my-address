import { SButton } from './styled';
import Loading from '../Loading';

const Button = ({ children, onClick, loading = false }) => {
  return <SButton onClick={onClick}>{loading ? <Loading /> : children}</SButton>;
};

export default Button;
