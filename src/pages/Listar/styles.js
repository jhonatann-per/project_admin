import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding: 20px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
export const Listen = styled.tr`
   border-bottom: 1px solid #ccc;
`;

export const Th = styled.th`
  background-color: #f0f0f0;
  text-align: center;
  padding: 10px;
  border-left: 3px;
  
`;

export const Td = styled.td`
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px;
`;


export const Title = styled.h1`
  margin: 0;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const EditButton = styled.button`
  background-color: #3498db; /* Cor azul */
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin-right: 5px;
`;

export const DeleteButton = styled.button`
  background-color: #e74c3c; /* Cor vermelha */
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin-right: 5px;
`;
export const VisualizarButton = styled.button`
  background-color: #e74c3c; /* Cor vermelha */
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin-right: 5px;
`;


export const ViewButton = styled.button`
  background-color: #2ecc71; /* Cor verde */
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;