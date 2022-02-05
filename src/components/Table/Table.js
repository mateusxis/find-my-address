import { STable, STitle } from './styled';
import ColumnTable from './ColumnTable';
import HeaderTable from './HeaderTable';
import RowTable from './RowTable';
import hashifyKey from '../../utils/hashifyKey';

const Table = ({ data = [], title = '' }) => {
  return data.length > 0 ? (
    <>
      {title && <STitle>{title}</STitle>}
      <STable>
        <HeaderTable>
          <ColumnTable label="Logradouro" className="c1">
            Logradouro
          </ColumnTable>
          <ColumnTable label="Bairro" className="c2">
            Bairro
          </ColumnTable>
          <ColumnTable label="Cidade" className="c3">
            Cidade
          </ColumnTable>
          <ColumnTable label="Estado" className="c4">
            Estado
          </ColumnTable>
          <ColumnTable label="CEP" className="c5">
            CEP
          </ColumnTable>
        </HeaderTable>
        {data.map((value, index) => (
          <RowTable key={hashifyKey(`${value.zipCode}_${index}`)}>
            <ColumnTable label="Logradouro" className="c1">
              {value.address}
            </ColumnTable>
            <ColumnTable label="Bairro" className="c2">
              {value.district}
            </ColumnTable>
            <ColumnTable label="Cidade" className="c3">
              {value.city}
            </ColumnTable>
            <ColumnTable label="Estado" className="c4">
              {value.state}
            </ColumnTable>
            <ColumnTable label="CEP" className="c5">
              {value.zipCode}
            </ColumnTable>
          </RowTable>
        ))}
      </STable>
    </>
  ) : null;
};

export default Table;
