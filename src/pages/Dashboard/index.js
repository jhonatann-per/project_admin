import React, { useContext } from 'react';
import { Container } from './styles';
import { Context } from '../../Context/AuthContext';
import Header from '../../Components/Header';
import Introduction from '../../Components/Introduction';
import BodyAuto from '../../Components/BodyAuto';

const Dashboard = () =>{
//    const {handleLogout} = useContext(Context);

    return(
        <Container>
            <Header /> 
            <Introduction />
            <BodyAuto />
        </Container>
    )
};

{/* <button onClick={handleLogout}>Sair</button> */}
export default Dashboard;