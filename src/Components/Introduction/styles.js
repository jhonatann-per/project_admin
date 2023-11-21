import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  max-height: 70%;
  margin-bottom: 295px;
  padding: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 auto;
`;

export const HeaderText = styled.div`
  position: absolute;
  z-index: 1;
  color: #FFFFFF;
  font-size: 27px;


  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 390px) {
    font-size: 16px;
  }

  h1{
    margin: 15px;
  }
`;




export const ImageWrapper = styled.div`
  position: relative;
  img {
    max-width: 100%;
    height: 100%;
    display: block;
    image-rendering: pixelated;
  }
  /* @media (max-width: 1400px) {
    max-width: 70%;
  } */
  @media (max-width: 1280px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const WhiteButton = styled.button`
  width: 270px;
  height: 48px;
  text-align: center;
  line-height: 48px;
  font-size: 16px;
  cursor: pointer;
  color: #000;
  background-color: #fff;
  border: 1px solid #000;
  margin-right: 10px;
  border-radius: 4px;

  @media (max-width: 1024px) {
    width: 32rem;
  }

  @media (max-width: 390px) {
    width: 100%; /* Isso permitirá que o botão ocupe 100% da largura */
    height: auto; /* Isso tornará a altura proporcional ao conteúdo */
    background-color: transparent;
  }
`;

export const TransparentButton = styled.button`
  width: 270px;
  height: 48px;
  text-align: center;
  line-height: 48px;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 4px;

  @media (max-width: 1024px) {
    width: 32rem;
  }

  @media (max-width: 390px) {
    width: 100%; /* Isso permitirá que o botão ocupe 100% da largura */
    height: auto; /* Isso tornará a altura proporcional ao conteúdo */
    background-color: transparent;
  }
`;