import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  max-width: 100vw;
  margin: 0 0 0 0;
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
  width: 550px;
`;

export const TestDiv = styled.div`
  display: flex;
  align-items: center;
  max-width: 30%;
  margin-bottom: 20px;
`;

export const IconTest = styled.div`
  margin-right: 25px; /* Adicione margem à direita para separar a imagem do texto */
  margin-bottom: 135px;
`;

export const IconTesTwo = styled.div`
  margin-right: 35px; /* Adicione margem à direita para separar a imagem do texto */
  margin-bottom: 210px;
`;

export const TextTest = styled.div`
  display: flex;
  flex-direction: column; /* Coloca os elementos em coluna */
`;


export const H4Text = styled.h4`
  color: white;
  font-size: 23px;
  text-align: left;
  white-space: nowrap;
  margin-bottom: 5px;
`;

export const PText = styled.p`
  text-align: left;
  color: #848484;
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1.8;
`;