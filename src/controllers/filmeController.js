import FilmeService from "../services/filmeService.js";

async function createFilme(req, res, next) {
    try {
        let filme = req.body;
        if(!filme.titulo || !filme.genero || !filme.ano_lancamento || !filme.sinopse) {
            throw new Error("Os campos título, gênero, ano de lançamento e sinopse devem ser preenchidos");
        }
        filme = await FilmeService.createFilme(filme);
        res.send(filme);
        logger.info(`POST /filme - ${JSON.stringify(filme)}`)
    } catch (err) {
        next(err);
    }
}

async function getFilmes(req, res, next) {
    try {
        res.send(await FilmeService.getFilmes());
        logger.info(`GET /filme`);
    } catch (err) {
        next(err);
    }
}
async function getFilme(req, res, next) {
    try {
        res.send(await FilmeService.getFilme(req.params.id));
        logger.info(`GET /filme`);
    } catch (err) {
        next(err);
    }
}

async function updateFilme(req, res, next) {
    try {
        let filme = req.body;
        if(!filme.filme_id || !filme.titulo || !filme.genero || !filme.ano_lancamento || !filme.sinopse) {
            throw new Error("Os campos título, gênero, ano de lançamento e sinopse devem ser preenchidos");
        }
        filme = await FilmeService.updateFilme(filme);
        res.send(filme);
        logger.info(`PUT /filme - ${JSON.stringify(filme)}`)
    } catch (err) {
        next(err);
    }
}

async function deleteFilme(req, res, next) {
    try {
        await FilmeService.deleteFilme(req.params.id);
        res.end();
        logger.info("DELETE /filme");
    } catch (err) {
        next(err);
    }
}

export default {
    createFilme,
    getFilmes,
    getFilme,
    updateFilme,
    deleteFilme
}