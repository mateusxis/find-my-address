import { SColumn } from './styled';

const ColumnTable = ({ children, label, className }) => {
  return (
    <SColumn data-label={label} className={className}>
      {children}
    </SColumn>
  );
};

export default ColumnTable;
