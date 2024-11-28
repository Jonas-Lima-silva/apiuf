import colecacoUf from '../dados/dados.js';

export const buscarUf = () => {
    return colecacoUf;
}

export const buscarUfsPorNome = (nomeuf)=>{
    return colecacoUf.filter(uf => uf.nome.tolowerCase().includes(nomeuf.tolowerCase()));
};
export const buscarUfporid =(id)=>{
    const idUf = parent(id);
    return colecacoUf.find(uf => uf.id === idUf);
}