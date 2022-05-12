import FilmeRepository from "../repositories/filmeRepository.js";

async function createFilme(filme) {
    return await FilmeRepository.insertFilme(filme);
}

async function getFilmes() {
    return await FilmeRepository.getFilmes();
}

async function getFilme(id) {
    return await FilmeRepository.getFilme(id);
}

async function updateFilme(filme) {
    return await FilmeRepository.updateFilme(filme);
}

async function deleteFilme(id) {
    return await FilmeRepository.deleteFilme(id);
}

export default {
    createFilme,
    getFilmes,
    getFilme,
    updateFilme,
    deleteFilme
}