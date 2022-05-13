import Filme from "../models/filmeModel.js"

async function insertFilme(filme) {
    try {
        return await Filme.create(filme);
    } catch (err) {
        throw err;
    }
}

async function getFilmes() {
    try {
        return await Filme.findAll();
    } catch (err) {
        throw err;
    }
}

async function getFilme(id) {
    try {
        return await Filme.findByPk(id);
    } catch (err) {
        throw err;
    }
}

async function updateFilme(filme) {
    try {
        await Filme.update(filme, {
            where: {
                filmeId: filme.filmeId
            }
        });
        return await getFilme(filme.filmeId);
    } catch (err) {
        throw err;
    }
}

async function deleteFilme(id) {
    try {
        await Filme.destroy({
            where: {
                filmeId: id
            }
        });
    } catch (err) {
        throw err;
    }
}

export default {
    insertFilme,
    getFilmes,
    getFilme,
    updateFilme,
    deleteFilme
}