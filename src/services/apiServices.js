import axios from "axios";

const apiServices = axios.create({
    baseURL: 'http://wsih/PNP560/api/consultaConsistencia?solicitacao.numeroOperacao=605400602&solicitacao.status=0'
  });

export default apiServices;