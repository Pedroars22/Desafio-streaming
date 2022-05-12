import SerieService from "../services/serieService.js";

async function createSerie(req, res, next) {
    try {
        let serie = req.body;
        if (!serie.titulo || !serie.genero || !serie.qtd_temporadas || !serie.sinopse) {
            throw new Error("Os campos título, gênero, quantidade de temporadas e sinopse devem ser preenchidos");
        }
        serie = await SerieService.createSerie(serie);
        res.send(serie);
        logger.info(`POST /serie - ${JSON.stringify(serie)}`)
    } catch (err) {
        next(err);
    }
}

async function getSeries(req, res, next) {
    try {
        res.send(await SerieService.getSeries());
        logger.info(`GET /serie`);
    } catch (err) {
        next(err);
    }
}
async function getSerie(req, res, next) {
    try {
        res.send(await SerieService.getSerie(req.params.id));
        logger.info(`GET /serie`);
    } catch (err) {
        next(err);
    }
}

async function updateSerie(req, res, next) {
    try {
        let serie = req.body;
        if (!serie.serie_id || !serie.titulo || !serie.genero || !serie.qtd_temporadas || !serie.sinopse) {
            throw new Error("Os campos título, gênero, quantidade de temporadas e sinopse devem ser preenchidos");
        }
        serie = await SerieService.updateSerie(serie);
        res.send(serie);
        logger.info(`PUT /serie - ${JSON.stringify(serie)}`)
    } catch (err) {
        next(err);
    }
}

async function deleteSerie(req, res, next) {
    try {
        await SerieService.deleteSerie(req.params.id);
        res.end();
        logger.info("DELETE /serie");
    } catch (err) {
        next(err);
    }
}

export default {
    createSerie,
    getSeries,
    getSerie,
    updateSerie,
    deleteSerie
}