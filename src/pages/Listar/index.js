import React from "react";
import { Container, Button, Table, Th, Td, Listen, Top, Title, EditButton, DeleteButton, VisualizarButton } from "./styles";
import Header from "../../Components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../config/configApi";

const Listar = () => {

  const [data, setData] = useState([]);
  const [status, setStatus] = useState({
      type: '',
      messagem: ''
  });
  const getUsuarios = async () => {
    await api.get("/usuarios")
        .then((res) => {
            console.log(res.data);
            if (res.data.erro) {
                setStatus({
                    type: 'erro',
                    messagem: res.data.messagem
                });
            } else {
                setData(res.data.usuarios);
            }
        })
        .catch(() => {
            setStatus({
                type: 'erro',
                messagem: 'Erro: Tente mais tarde!'
            });
        });
}

useEffect(() => {
    getUsuarios();
}, []);

  const apagarUsuario = async (idUsuario) =>{
    const headers = {
      'Content-type': 'application/json'
  }

    await api.delete("/deletar/" + idUsuario, {headers})
    .then((res) => {
      if(res.data.erro){
        setStatus({
          type: 'erro',
          messagem: res.data.messagem
        });
      }else{
        setStatus({
          type: 'success',
          messagem: res.data.messagem
        });
        getUsuarios();
      }
    })
    .catch(() => {
      setStatus({
        type: 'erro',
        messagem: 'Erro: ao conectar com a API'
      })
    })
  }

    return (
      <Container>
            <Header />
            <Top>
              <Title>Lista de Usuários</Title>
              <Link to="/cadastrar"><Button>Cadastrar</Button></Link>
            </Top>
        <Table>
          <thead>
            <Listen>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>Email</Th>
            </Listen>
          </thead>
          <tbody>
          {data.map((usuario) => (
            <tr key={usuario.id}>
              <Td>{usuario.id}</Td>
              <Td>{usuario.nome}</Td>
              <Td>{usuario.email}</Td>
              <Td>
                <Link to={"/editar/" + usuario.id}><EditButton>Editar</EditButton></Link>
                <Link to={"/visualizar/" + usuario.id}><VisualizarButton> Visualizar </VisualizarButton></Link>
                <Link to={"#"}><DeleteButton onClick={() => apagarUsuario(usuario.id)}>Excluir</DeleteButton></Link>
              </Td>
            </tr>
          ))}

          </tbody>
        </Table>
      </Container>
    );
  };
  
  export default Listar;