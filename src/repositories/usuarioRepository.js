import { connect } from "./db.js"

async function insertUsuario(usuario) {
    const conn = await connect();
    try {
        const sql = "INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES ($1, $2, $3, $4) RETURNING *"
        const values = [usuario.nome, usuario.sobrenome, usuario.email, usuario.senha];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function getUsuarios() {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM usuarios");
        return res.rows
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function getUsuario(id) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM usuarios WHERE usuario_id = $1", [id]);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function updateUsuario(usuario) {
    const conn = await connect();
    try {
        const sql = "UPDATE usuarios SET nome = $1, sobrenome = $2, email = $3, senha = $4 WHERE usuario_id = $5 RETURNING *";
        const values = [usuario.nome, usuario.sobrenome, usuario.email, usuario.senha, usuario.usuario_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function deleteUsuario(id) {
    const conn = await connect();
    try {
        await conn.query("DELETE FROM usuarios WHERE usuario_id = $1", [id]);
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default {
    insertUsuario,
    getUsuarios,
    getUsuario,
    updateUsuario,
    deleteUsuario
}