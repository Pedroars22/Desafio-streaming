import { connect } from "./db.js";

async function insertSerie(serie) {
    const conn = await connect();
    try {
        const sql = "INSERT INTO series (titulo, genero, qtd_temporadas, sinopse, avaliacao) VALUES ($1, $2, $3, $4, $5) RETURNING *"
        const values = [serie.titulo, serie.genero, serie.qtd_temporadas, serie.sinopse, serie.avaliacao];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function getSeries() {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM series");
        return res.rows
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function getSerie(id) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM series WHERE serie_id = $1", [id]);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function updateSerie(serie) {
    const conn = await connect();
    try {
        const sql = "UPDATE series SET titulo = $1, genero = $2, qtd_temporadas = $3, sinopse = $4, avaliacao = $5 WHERE serie_id = $6 RETURNING *";
        const values = [serie.titulo, serie.genero, serie.qtd_temporadas, serie.sinopse, serie.avaliacao, serie.serie_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function deleteSerie(id) {
    const conn = await connect();
    try {
        await conn.query("DELETE FROM series WHERE serie_id = $1", [id]);
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default {
    insertSerie,
    getSeries,
    getSerie,
    updateSerie,
    deleteSerie
}