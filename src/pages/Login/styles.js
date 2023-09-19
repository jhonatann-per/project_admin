import styled from 'styled-components';
import broly from '../../assets/broly.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  background-image: url(${broly}); /* Substitua pelo caminho da sua imagem */
  background-size: cover; /* Para cobrir todo o elemento com a imagem */
  background-position: center; /* Para centralizar a imagem */
`;

export const FormContainer = styled.div`
  background-color: white;
  border-radius: 2px;
  padding: 20px;
  box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  height: 40%;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  gap: 20px;

  h2{
    display: flex;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ForgotPassword = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5c2c7;
  height: 35px;
  border-radius: 3px;
  color: red;
  font-size: 14px;
  margin-top: 15px;
`;