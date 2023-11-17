import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Container, Conteudo, AlertDanger,
  AlertSuccess, Formulario, Label, Input,
  ButtonWarning} from './styles';
import Header from '../Header';
import api from '../../config/configApi';

export const Editar = () => {

  const { id } = useParams();
  console.log(id);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [status, setStatus] = useState({
      type: '',
      messagem: ''
  });

  const editarUsuario = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar 
                        // a página ao enviar o formulário
  
    const headers = {
      'Content-Type': 'application/json'
    };
  
    try {
      console.log('Dados a serem enviados para a API (editarUsuario):', { id, nome, email, senha });
  
      const res = await api.put("/editar", { id, nome, email, senha }, { headers });
  
      console.log('Resposta da API (editarUsuario):', res.data);
  
      if (res.data.erro) {
        setStatus({
          type: 'erro',
          messagem: res.data.messagem
        });
      } else {
        setStatus({
          type: 'success',
          messagem: res.data.messagem
        });
      }
    } catch (error) {
      console.error('Falha na requisição verifique a API', error);
  
      setStatus({
        type: 'erro',
        messagem: 'Erro: Tente mais tarde!'
      });
    }
  };
  
  useEffect(() => {
    const getUsuario = async () => {
      try {
        const res = await api.get(`/usuario/${id}`);
  
        console.log('Resposta da API (getUsuario):', res.data);
  
        if (res.data.erro) {
          setStatus({
            type: 'erro',
            messagem: res.data.messagem
          });
        } else {
          setNome(res.data.usuario.nome);
          setEmail(res.data.usuario.email);
        }
      } catch (error) {
        console.error('Erro ao obter usuário (getUsuario):', error);
  
        setStatus({
          type: 'erro',
          messagem: 'Erro: Tente mais tarde!'
        });
      }
    };
  
    getUsuario();
  }, [id]);

   //TEMPORIZADOR
   useEffect(() => {
    const timeout = setTimeout(() => {
      setStatus({
        type: '',
        messagem: ''
      });
    }, 3600); // 10 segundos

    return () => clearTimeout(timeout);
  }, [status]);

   
    return (
      <Container>
        <Header />
        <Conteudo>
                    <h1>Editar usuário</h1>
          <Formulario onSubmit={editarUsuario}>
              {status.type === 'erro' && <AlertDanger>{status.messagem}</AlertDanger>}
              {status.type === 'success' && <AlertSuccess>{status.messagem}</AlertSuccess>}
              <Label>Nome:</Label>
              <Input 
              type="text" 
              name="nome" 
              placeholder="Nome do usuário" 
              value={nome}
              onChange={e => setNome(e.target.value)}
              />

              <Label>E-mail:</Label>
              <Input 
              type="email" 
              name="email" 
              placeholder="E-mail do usuário" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              />

              <Label>Senha:</Label>
              <Input 
              type="password" 
              name="senha" 
              placeholder="Senha"              
              autoComplete='on'
              onChange={e => setSenha(e.target.value)}
              />
              <ButtonWarning type="submit">Confirmar Alteração</ButtonWarning>
          </Formulario>
        </Conteudo>
          
    </Container>
    );
  };
  
  export default Editar;
