
import colecaoUf  from './servicos/servico.js';

const app = express();

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mensagemErro = '';
    let uf;
   if (!(isNaN(iduf))){
    uf = colecaoUf.colecaoUf.find(u => u.id === idUF);
    if (!uf){
        mensagemErro = 'UF não encontrada';

    }

   }else{
    mensagemErro = 'Requisicão invalida';
   }
    
   if (uf) {
    res.json(uf);
   }else{
    res.status(404).json({"erro": mensagemErro});
   }
});

app.listen(8080, () => {
console.log('Servidor iniciado na porta 8080');
});
const buscarUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.tolowerCase().includes(nomeUf.tolowerCase()));
}
app.get('/ufs',(req, res)=> {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf):
    colecaoUf;
    if (resultado.length > 0){
        res.json(resultado);
    } else{
        res.status(404).send({"erro": "Nenhuma Uf encontrada"});
    }
})
