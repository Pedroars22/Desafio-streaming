import Serie from "../models/serieModel.js"

async function insertSerie(serie) {
    try {
        return await Serie.create(serie);
    } catch (err) {
        throw err;
    }
}

async function getSeries() {
    try {
        return await Serie.findAll();
    } catch (err) {
        throw err;
    }
}

async function getSerie(id) {
    try {
        return await Serie.findByPk(id);
    } catch (err) {
        throw err;
    }
}

async function updateSerie(serie) {
    try {
        await Serie.update(serie, {
            where: {
                serieId: serie.serieId
            }
        });
        return await getSerie(serie.serieId);
    } catch (err) {
        throw err;
    }
}

async function deleteSerie(id) {
    try {
        await Serie.destroy({
            where: {
                serieId: id
            }
        });
    } catch (err) {
        throw err;
    }
}

export default {
    insertSerie,
    getSeries,
    getSerie,
    updateSerie,
    deleteSerie
}