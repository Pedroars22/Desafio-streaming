import Assistindo from "../models/assistindoModels.js";
import Usuario from "../models/usuarioModel.js";
import Filme from "../models/filmeModel.js";
import Serie from "../models/serieModel.js"

async function insertAssistindo(usuario) {
    try {
        return await Assistindo.create(usuario);
    } catch (err) {
        throw err;
    }
}

async function getAssistidos() {
    try {
        return await Assistindo.findAll();
    } catch (err) {
        throw err;
    }
}

async function getAssistindo(id) {
    try {
        return await Assistindo.findByPk(id, {
            include: [
                {
                    model: Usuario
                },
                {
                    model: Filme
                },
                {
                    model: Serie
                }
            ]
        });
    } catch (err) {
        throw err;
    }
}

async function updateAssistindo(assistido) {
    try {
        await Assistindo.update( 
            {
                data: assistido.data,
                avaliacao: assistido.avaliacao,
                filmeId: assistido.filmeId,
                serieId: assistido.serieId
            },
            {
                where: {
                    assistidoId: assistido.assistidoId
                }
            }
        );
        return await getAssistindo(assistido.assistidoId);
    } catch (err) {
        throw err;
    }
}

async function deleteAssistindo(id) {
    try {
        await Assistindo.destroy({
            where: {
                assistidoId: id
            }
        });
    } catch (err) {
        throw err;
    }
}

export default {
    insertAssistindo,
    getAssistidos,
    getAssistindo,
    updateAssistindo,
    deleteAssistindo
}