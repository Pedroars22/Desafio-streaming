import SerieRepository from "../repositories/serieRepository.js";

async function createSerie(serie) {
    return await SerieRepository.insertSerie(serie);
}

async function getSeries() {
    return await SerieRepository.getSeries();
}

async function getSerie(id) {
    return await SerieRepository.getSerie(id);
}

async function updateSerie(serie) {
    return await SerieRepository.updateSerie(serie);
}

async function deleteSerie(id) {
    return await SerieRepository.deleteSerie(id);
}

export default {
    createSerie,
    getSeries,
    getSerie,
    updateSerie,
    deleteSerie
}