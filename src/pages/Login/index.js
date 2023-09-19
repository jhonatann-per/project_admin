import React, { useState, useContext} from 'react';
import  api  from '../../config/configApi';
import { Context } from '../../Context/AuthContext';
import {useNavigate} from 'react-router-dom'

import {
  Container,
  FormContainer,
  Form,
  Input,
  Button,
  ForgotPassword,
  ErrorMessage,
} from './styles';

const Login = () => {
  const {signIn} = useContext( Context );

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [mensagemServidor, setMensagemServidor] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    //preventDefault() é um método usado em eventos JavaScript para
    // evitar o comportamento padrão associado a um evento específico
    // em um elemento HTML, como mencionado anteriormente. Ele é usado
    // para impedir que a ação padrão de um evento ocorra, permitindo
    // que você controle o que acontece em resposta a esse evento.
    // Por exemplo, ao chamar event.preventDefault() em um evento de clique
    // em um link, você pode impedir que o navegador siga a URL do link,
    // permitindo que você execute uma ação personalizada no lugar.
    e.preventDefault();
    const data = {
      usuario: usuario, // Enviar o email do estado 'email'
      senha: password, // Enviar a senha do estado 'password'
    };
    // Aqui você pode adicionar a lógica de autenticação
    // Por exemplo, verificar se o email e a senha estão corretos
    // Se houver um erro, você pode definir a mensagem de erro usando setError
    const headers = {
      //"Content-type", "application/json" indica que o corpo da requisição
      //  ou resposta está em formato JSON. Isso é usado para informar ao
      //   servidor e ao cliente que o conteúdo deve ser interpretado como JSON.
      'Content-type': 'application/json'
      }
    api.post("/login", data, { headers })
    .then((res) => {
      // Verificar se o login foi bem-sucedido com base na resposta do servidor
      if (res.data.erro === false) {
        setMensagemServidor(res.data.mensagem);
        localStorage.setItem('token', JSON.stringify(res.data.token));
        api.defaults.headers.Authorization = `Bearer ${res.data.token}`;
        signIn(true)
        // Redirecionar somente se o login for bem-sucedido
        navigate('/dashboard');
      } else {
        // Se o login não foi bem-sucedido, você pode exibir uma mensagem de erro
        console.log("Erro: Login ou senha incorretos");
        setMensagemServidor("Login falhou. Verifique suas credenciais.");
      }
    })
    .catch(() => {
      console.log("Erro: Servidor não encontrado");
      // Tratar erros de rede ou do servidor, se necessário
    });
};


return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleLogin}>
          <h2>LOGIN</h2>
          <Input
            type="email"
            placeholder="Email"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Acessar</Button>
        </Form>
        {mensagemServidor && <ErrorMessage>{mensagemServidor}</ErrorMessage>}
        <ForgotPassword>
          <a href="key">Esqueceu sua senha?</a>
        </ForgotPassword>
      </FormContainer>
    </Container>
  );
}

export default Login;