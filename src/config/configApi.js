import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080"
});

// Aqui é onde vamos fazer a configuraçaõ para a  conexão entre
// o front e o back
export default api;