import React, { useContext } from 'react';
import { Container } from './styles';
import { Context } from '../../Context/AuthContext';
import Header from '../../Components/Header';
import Introduction from '../../Components/Introduction';
import BodyAuto from '../../Components/BodyAuto';
import FeetPage from '../../Components/FeetPage';

const Home = () =>{
   const {handleLogout} = useContext(Context);

    return(
        <Container>
            <Header /> 
            <Introduction />
            <BodyAuto />
            <FeetPage />
            <button onClick={handleLogout}>Sair</button>
        </Container>
    )
};


export default Home;