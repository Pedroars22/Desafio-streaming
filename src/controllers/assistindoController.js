import AssistindoService from "../services/assistindoService.js";

async function createAssistindo(req, res, next) {
    try {
        let assistindo = req.body;
        if (!assistindo.data || !assistindo.usuarioId) {
            throw new Error("Data e Usuário Id são obrigatórios.")
        }
        assistindo = await AssistindoService.createAssistindo(assistindo);
        res.send(assistindo);
        logger.info(`POST /assistindo - ${JSON.stringify(assistindo)}`);
    } catch (err) {
        next(err);
    }

}

async function getAssistidos(req, res, next) {
    try {
        res.send(await AssistindoService.getAssistidos());
        logger.info(`GET /assistindo`);
    } catch (err) {
        next(err);
    }
}

async function getAssistindo(req, res, next) {
    try {
        res.send(await AssistindoService.getAssistindo(req.params.id));
        logger.info("GET /assistindo");
    } catch (err) {
        next(err);
    }
}

async function updateAssistindo(req, res, next) {
    try {
        let assistindo = req.body;
        if (!assistindo.assistidoId || !assistindo.data || !assistindo.usuarioId) {
            throw new Error("Assistindo ID, data e Usuário ID são obrigatórios.")
        }
        assistindo = await AssistindoService.updateAssistindo(assistindo);
        res.send(assistindo);
        logger.info(`PUT /assistindo - ${JSON.stringify(assistindo)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteAssistindo(req, res, next) {
    try {
        await AssistindoService.deleteAssistindo(req.params.id);
        res.end();
        logger.info("DELETE /assistindo");
    } catch (err) {
        next(err);
    }
}

export default {
    createAssistindo,
    getAssistidos,
    getAssistindo,
    updateAssistindo,
    deleteAssistindo
}