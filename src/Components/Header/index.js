import React from 'react';
import { HeaderContainer, Title, Button, Container } from './styles';
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title>Meu Aplicativo</Title>
          <div>
            <Button>Planos</Button>
            <Link to="/dashboard"><Button>Dashboard</Button></Link>
            <Link to="/listar"><Button>Usuário</Button></Link>
            <Button>Empresa</Button>
          </div>
      </HeaderContainer>
    </Container>
    
  );
};

export default Header;
