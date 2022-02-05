import { SForm, SSection } from './styled';
import Alert from '../../container/AlertContainer';
import Button from '../../container/ButtonContainer';
import Input from '../../container/InputContainer';
import Table from '../../container/TableContainer';

const FormInput = () => {
  return (
    <SForm>
      <SSection>
        <Input placeholder="Digite o cep desejado" type="text" />
        <Button>Buscar</Button>
      </SSection>
      <Alert />
      <Table />
    </SForm>
  );
};

export default FormInput;
