import { SSection } from './styled';

import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FormInput from '../../components/FormInput';

const Home = () => (
  <Container>
    <SSection>
      <Header />
      <FormInput />
    </SSection>
    <Footer />
  </Container>
);

export default Home;
