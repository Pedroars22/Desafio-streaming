import AssistindoRepository from "../repositories/assistindoRepository.js";

async function createAssistindo(assistindo) {
    return await AssistindoRepository.insertAssistindo(assistindo);
}

async function getAssistidos() {
    return await AssistindoRepository.getAssistidos();    
}

async function getAssistindo(id) {
    return await AssistindoRepository.getAssistindo(id);
}

async function updateAssistindo(assistindo) {
    return await AssistindoRepository.updateAssistindo(assistindo);
}

async function deleteAssistindo(id) {
    await AssistindoRepository.deleteAssistindo(id);
}

export default {
    createAssistindo,
    getAssistidos,
    getAssistindo,
    updateAssistindo,
    deleteAssistindo
}