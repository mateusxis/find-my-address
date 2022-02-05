import Image from 'next/image';
import Link from 'next/link';
import { SLink, STitle, SSection } from './styled';

const Custom404 = () => (
  <SSection>
    <STitle>Houve um problema com nossos servidores</STitle>
    <Image width={500} height="auto" src="/assets/john-travolta.gif" alt="Ops, não encontramos o que você procura!" />
    <Link href="/" passHref>
      <SLink>Volte para nossa página inicial</SLink>
    </Link>
  </SSection>
);

export default Custom404;
