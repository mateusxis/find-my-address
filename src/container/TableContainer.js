import { useSelector } from 'react-redux';

import Table from '../components/Table';
import { selectAddress, selectAddressList } from '../redux/addressSlice';

const TableContainer = () => {
  const address = useSelector(selectAddress);
  const addressList = useSelector(selectAddressList);

  return (
    <>
      <Table title="Endereço Atual" data={address.address === '' ? [] : [address]} />
      <Table title="Histórico de Endereços Buscados" data={addressList} />
    </>
  );
};

export default TableContainer;
