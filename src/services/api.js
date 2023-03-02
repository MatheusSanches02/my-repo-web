import axios from "axios";

//configuração geralmente feita no arquivo .env, para evitar expor as url de conexão com a API

//prod
const MY_REPO_URL_API = "";

//teste
const MY_REPO_URL_API_TESTE = "https://localhost:7175/api/Repos";

const api = axios.create({
  baseURL: MY_REPO_URL_API_TESTE,
});
export default api;
