import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 60px; 
`;

export const HeaderContainer = styled.div`
  background-color: #2B2E31;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 130px;
  left: 0;
  position: fixed; 
  top: 0; 
  width: 100%; 
  z-index: 1000; 
`;

export const DivButtons = styled.div`
    margin-left: 100px;
`;


export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const Button = styled.button`
  background-color: transparent;
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

export const ButtonWhats = styled.button`
  background-color: #C8E0BC;
  color: black;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
