import React, { createContext, useEffect, useState } from "react";
import  api  from '../config/configApi';
const Context = createContext();

function AuthProvider({children}){
    // Aqui estamos verificando e autenticando se o usuário está logado
    // para permitir o mesmo acessar as páginas
    const [authenticated, setAuthenticated] = useState(false)

    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        const getLogin = async() =>{
            const token = localStorage.getItem('token')
            if(token){
                api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
                setAuthenticated(true);
            }
            setLoading(false);
        }
        getLogin();
    }, []);
    
    if(loading){
        return <h1>Carregando...</h1>
    }
   const handleLogout = () => {
        console.log("sair")
    }
   
    return(
        <Context.Provider value={{authenticated, handleLogout}}>
            {children}
        </Context.Provider>
    )
}
export { Context, AuthProvider}