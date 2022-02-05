import { useSelector } from 'react-redux';

import Alert from '../components/Alert';

import { selectError } from '../redux/notificationSlice';

const AlertContainer = () => {
  const isError = useSelector(selectError);

  return isError ? <Alert /> : null;
};

export default AlertContainer;
