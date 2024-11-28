import colecaoUf from './dados/dados.js';

export const buscarUf = () => {
    return colecaoUf;
}

export const buscarUfsPorNome = (nomeuf)=>{
    return colecaoUf.filter(uf => uf.nome.tolowerCase().includes(nomeuf.tolowerCase()));
};
export const buscarUfporid =(id)=>{
    const idUf = parent(id);
    return colecaoUf.find(uf => uf.id === idUf);
}