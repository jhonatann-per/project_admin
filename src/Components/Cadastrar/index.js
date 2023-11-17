import Header from '../Header';
import { useState } from 'react';
import { Container, Conteudo, Formulario, Label, Input, ButtonCadastrar, AlertDanger, AlertSuccess} from './styles';
import api from '../../config/configApi';

const Cadastrar = () =>{
    const [status , setStatus] = useState({
        type:'',
        messagem: ''
    })

    const [ usuario, setUsuario] = useState({
        nome: '',
        email: '',
        senha: ''
    })

    const valorInput = e =>setUsuario({...usuario, [e.target.name]: e.target.value})
    const cadastrarUsuario = async e => {
        e.preventDefault()
        console.log(usuario.nome)
        
        const headers = {
            'Content-type': 'application/json'
        }

        await api.post("/usuario", usuario, {headers})
        .then((res) => {
            if(res.data.erro){
                setStatus({
                    type: 'erro',
                    messagem: res.data.messagem
                })
            } else {
                setStatus({
                    type: 'success',
                    messagem: 'Usuário cadastrado com sucesso'
                })
            }
        }).catch(() => {
            setStatus({
                type: 'erro',
                messagem: 'Erro ao cadastrar usuário. Por favor, preencha todos os campos corretamente.'
            })
        })
    }   

    return(
        <Container>
            <Header />
            <Conteudo>
                <h1>Cadastrar usuário</h1>
                {status.type === 'erro' ? <AlertDanger>{status.messagem}</AlertDanger> : ""}
                {status.type === 'success' ? <AlertSuccess>{status.messagem}</AlertSuccess> : ""}

                <Formulario onSubmit={cadastrarUsuario}>

                    <Label>Nome:</Label>
                    <Input 
                    type="text" 
                    name="nome" 
                    placeholder="Nome do usuário" 
                    onChange={valorInput}/>

                    <Label>E-mail:</Label>
                    <Input 
                    type="email" 
                    name="email" 
                    placeholder="E-mail do usuário" 
                    onChange={valorInput}/>

                    <Label>Senha:</Label>
                    <Input 
                    type="password" 
                    name="senha" 
                    placeholder="Senha" 
                    onChange={valorInput}
                    autoComplete='on'
                    />

                    <ButtonCadastrar type="submit">Cadastrar Novo Usuário</ButtonCadastrar>
                </Formulario>
            </Conteudo>
        </Container>
    )
}
export default Cadastrar;