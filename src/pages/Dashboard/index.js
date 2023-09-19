import React, { useContext } from 'react';
import { Container } from './styles';
import { Context } from '../../Context/AuthContext';

const Dashboard = () =>{
   const {handleLogout} = useContext(Context);

    return(
        <Container>
            <h1>Bem vindo jhonatan ao nosso dashboard</h1>
            <button onClick={handleLogout}>Sair</button>
        </Container>
    )
};

export default Dashboard;