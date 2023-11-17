import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  left: 0;
  position: fixed; /* Torna o header fixo no topo */
  top: 0; /* Fixa o header no topo da página */
  width: 100%; /* Define a largura como 100% da viewport */
  z-index: 1000; /* Ajusta a ordem de sobreposição, se necessário */
`;

export const ContentContainer = styled.div`
  padding-top: 60px; 
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

