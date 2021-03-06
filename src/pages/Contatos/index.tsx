import React from 'react';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import "./styles.css";

const Contatos: React.FC = () => {
  return (
    <Container>
        {/** Header */}
        <Header />
        <div style={{marginTop: 300}}>
          Contato
        </div>
        {/** Footer */}
        <Footer />
    </Container>
  );
}

export default Contatos;