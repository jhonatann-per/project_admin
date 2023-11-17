import React from 'react';
import { HeaderContainer, Title, Button, ContentContainer } from './styles';
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <ContentContainer>
      <HeaderContainer>
        <Title>Meu Aplicativo</Title>
          <div>
            <Link to="/dashboard"><Button>Dashboard</Button></Link>
            <Link to="/listar"><Button>Usuário</Button></Link>
          </div>
      </HeaderContainer>
    </ContentContainer>
    
  );
};

export default Header;
