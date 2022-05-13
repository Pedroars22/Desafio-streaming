import Usuario from "../models/usuarioModel.js";

async function insertUsuario(usuario) {
    try {
        return await Usuario.create(usuario);
    } catch (err) {
        throw err;
    }
}

async function getUsuarios() {
    try {
        return await Usuario.findAll();
    } catch (err) {
        throw err;
    }
}

async function getUsuario(id) {
    try {
        return await Usuario.findByPk(id);
    } catch (err) {
        throw err;
    }
}

async function updateUsuario(usuario) {
    try {
        await Usuario.update(usuario, {
            where: {
                usuarioId: usuario.usuarioId
            }
        });
        return await getUsuario(usuario.usuarioId);
    } catch (err) {
        throw err;
    }
}

async function deleteUsuario(id) {
    try {
        await Usuario.destroy({
            where: {
                usuarioId: id
            }
        });
    } catch (err) {
        throw err;
    }
}

export default {
    insertUsuario,
    getUsuarios,
    getUsuario,
    updateUsuario,
    deleteUsuario
}