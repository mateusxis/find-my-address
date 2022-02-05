import { useDispatch, useSelector } from 'react-redux';
import getConfig from 'next/config';
import Button from '../components/Button';
import { useFetch } from '../services/api';

const {
  publicRuntimeConfig: { checkZipCodeBaseUrl }
} = getConfig();

import { deleteAddress, insertAddress, insertAddressList, selectAddress, selectZipCode } from '../redux/addressSlice';
import { insertError, insertLoading, selectLoading } from '../redux/notificationSlice';

const ButtonContainer = ({ children }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const zipCode = useSelector(selectZipCode);
  const address = useSelector(selectAddress);

  const cleanZipCode = (zipCodeDirty) => zipCodeDirty.replace(/\D/g, '');
  const verifyZipCode = (zipCodeCandidate) => zipCodeCandidate.length === 8;

  const getAddress = async (event) => {
    event.preventDefault();
    const zipCodeSearched = cleanZipCode(zipCode);

    if (address.address !== '') {
      dispatch(
        insertAddressList({
          address: address.address,
          city: address.city,
          district: address.district,
          state: address.state,
          zipCode: address.zipCode
        })
      );
    }
    dispatch(deleteAddress());

    if (verifyZipCode(zipCodeSearched)) {
      try {
        dispatch(insertLoading(true));

        const { data: addressData } = await useFetch({
          method: 'GET',
          url: `${checkZipCodeBaseUrl}/address`,
          params: { zipCode: zipCodeSearched },
          timeout: 2000
        });

        if (addressData.ok) {
          dispatch(insertError(false));
          dispatch(
            insertAddress({
              address: addressData.address,
              city: addressData.city,
              district: addressData.district,
              state: addressData.state,
              zipCode: addressData.code
            })
          );
        } else {
          dispatch(insertError(true));
        }
      } catch {
        dispatch(insertError(true));
      } finally {
        dispatch(insertLoading(false));
      }
    }
  };

  const onClick = (event) => getAddress(event);

  return (
    <Button loading={isLoading} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonContainer;
