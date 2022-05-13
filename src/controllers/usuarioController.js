import UsuarioService from "../services/usuarioService.js";

async function createUsuario(req, res, next) {
    try {
        let usuario = req.body;
        if (!usuario.nome || !usuario.email || !usuario.senha) {
            throw new Error("Os campos nome, email e senha são obrigatórios.")
        }
        usuario = await UsuarioService.createUsuario(usuario);
        res.send(usuario);
        logger.info(`POST /usuario - ${JSON.stringify(usuario)}`);
    } catch (err) {
        next(err);
    }

}

async function getUsuarios(req, res, next) {
    try {
        res.send(await UsuarioService.getUsuarios());
        logger.info(`GET /usuario`);
    } catch (err) {
        next(err);
    }
}

async function getUsuario(req, res, next) {
    try {
        res.send(await UsuarioService.getUsuario(req.params.id));
        logger.info("GET /usuario");
    } catch (err) {
        next(err);
    }
}

async function updateUsuario(req, res, next) {
    try {
        let usuario = req.body;
        if (!usuario.usuarioId || !usuario.nome || !usuario.email || !usuario.senha) {
            throw new Error("Os campos Usuario ID, nome, email e senha são obrigatórios.")
        }
        usuario = await UsuarioService.updateUsuario(usuario);
        res.send(usuario);
        logger.info(`PUT /usuario - ${JSON.stringify(usuario)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteUsuario(req, res, next) {
    try {
        await UsuarioService.deleteUsuario(req.params.id);
        res.end();
        logger.info("DELETE /usuario");
    } catch (err) {
        next(err);
    }
}

export default {
    createUsuario,
    getUsuarios,
    getUsuario,
    updateUsuario,
    deleteUsuario
}