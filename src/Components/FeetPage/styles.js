import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding-top: 70px;
`;

export const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  max-width: 100vw;
  padding-left: 60px;
  margin-top: 40px;
  justify-content: center;
`;

export const HeaderText = styled.div`
  color: #FFFFFF;
  font-size: 27px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 390px) {
    font-size: 16px;
  }
  h1{
      margin-bottom: 30px;
  }
  p{
    font-size: 20px;
    color: #848484;
;
  }
`;


export const ImageContainer = styled.div`
  width: 60%;
  height: 50%;
  margin-top: 10px;
  img {
    width: 80%;
    height: auto;
    object-fit: cover;
    image-rendering: optimizeQuality;
  }
`;

export const TextConteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30%;
  
`;

export const TextTest = styled.div`
  display: flex;
  flex-direction: column; /* Coloca os elementos em coluna */
  width: 70%;
  margin-right: 150px
  
`;


export const H4Text = styled.h4`
  color: white;
  font-size: 23px;
  text-align: left;
  white-space: nowrap;
  padding-bottom: 32px;
`;

export const PText = styled.p`
  text-align: left;
  color: #848484;
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1.8;
`;

export const StyledList = styled.ul`
  list-style-type: disc; /* ou 'circle' ou 'square' dependendo do estilo de ponto desejado */
  padding-left: 20px; /* ajuste o recuo conforme necessário */
  text-align: left;
  li {
    color: #CBBACB;
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: 15px;
    /* Adicione mais estilos conforme necessário */
  }
`;