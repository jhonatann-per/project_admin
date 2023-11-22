import React from 'react';
import { HeaderContainer, Title, Button, Container, DivButtons, ButtonWhats } from './styles';
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title>Meu Aplicativo</Title>
          <DivButtons>
            <Button>Planos</Button>
            <Link to="/home"><Button>Home</Button></Link>
            <Link to="/listar"><Button>Usuários</Button></Link>
            <Button>Empresa</Button>
            <ButtonWhats>WhatsApp</ButtonWhats>
          </DivButtons>
      </HeaderContainer>
    </Container>
    
  );
};

export default Header;
