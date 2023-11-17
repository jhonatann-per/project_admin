import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container, ConteudoUsuario} from './styles';
import Header from './../Header'
import api from '../../config/configApi';


const Visualizar = () => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState([]);
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });
  useEffect(() => {
    const getUsuario = async () => {
        await api.get("/usuario/" + id)
            .then((response) => {
                if (response.data.erro) {
                    setStatus({
                        type: 'erro',
                        messagem: response.data.messagem
                    });
                } else {
                    setData(response.data.usuario);
                }
            })
            .catch(() => {
                setStatus({
                    type: 'erro',
                    messagem: "Erro: Tente mais tarde!"
                });
            });
    }

    getUsuario();
}, [id]);


  return (
    <Container>
      <Header />
      <ConteudoUsuario>ID: {id}</ConteudoUsuario>
      <ConteudoUsuario>Nome:{data.nome}</ConteudoUsuario>
      <ConteudoUsuario>E-mail:{data.email}</ConteudoUsuario>
    </Container>
  );
};

export default Visualizar;