import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: black;
    color: white;
`;
export const Conteudo = styled.div`
    width: 500px;
    height: 600px;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: black;
    width: 80%;
    margin-top: 20px;
`;
export const Label = styled.label`
    margin-bottom: 8px;
`;
export const Input = styled.input`
    width: 100%;
    height: 32px;
    padding: 12px;
    margin-bottom: 16px;
`;

export const ButtonWarning = styled.button`

`;

export const AlertSuccess = styled.span``

export const AlertDanger = styled.span``