import React from 'react';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import "./styles.css";

const ReceitasInternas: React.FC = () => {
  return (
    <Container>
        {/** Header */}
        <Header />
        {/** Footer */}
        <Footer />
    </Container>
  );
}

export default ReceitasInternas;