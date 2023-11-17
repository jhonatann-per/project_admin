import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  width: 70%;
  height: 50%;
  margin-top: 10px;
  img {
    width: 70%;
    height: auto;
    object-fit: cover;
    image-rendering: pixelated;
  }
`;

export const TextConteudo = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
`;

export const Explanation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 72%;

  h4 {
    color: white;
    font-size: 18px;
    text-align: left;
    white-space: nowrap;
    margin-bottom: 10px; 
  }

  p {
    text-align: left;
    color: #848484;
    font-size: 15px;
    margin-bottom: 10px;
    line-height: 1.8;
  }
`;

