import { connect } from "./db.js";

async function insertFilme(filme) {
    const conn = await connect();
    try {
        const sql = "INSERT INTO filmes (titulo, genero, ano_lancamento, sinopse, avaliacao) VALUES ($1, $2, $3, $4, $5) RETURNING *"
        const values = [filme.titulo, filme.genero, filme.ano_lancamento, filme.sinopse, filme.avaliacao];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function getFilmes() {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM filmes");
        return res.rows
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function getFilme(id) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM filmes WHERE filme_id = $1", [id]);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function updateFilme(filme) {
    const conn = await connect();
    try {
        const sql = "UPDATE filmes SET titulo = $1, genero = $2, ano_lancamento = $3, sinopse = $4, avaliacao = $5 WHERE filme_id = $6 RETURNING *";
        const values = [filme.titulo, filme.genero, filme.ano_lancamento, filme.sinopse, filme.avaliacao, filme.filme_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function deleteFilme(id) {
    const conn = await connect();
    try {
        await conn.query("DELETE FROM filmes WHERE filme_id = $1", [id]);
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default {
    insertFilme,
    getFilmes,
    getFilme,
    updateFilme,
    deleteFilme
}