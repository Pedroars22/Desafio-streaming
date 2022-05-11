import UsuarioRepository from "../repositories/usuarioRepository.js"

async function createUsuario(usuario) {
    return await UsuarioRepository.insertUsuario(usuario);
}

async function getUsuarios() {
    return await UsuarioRepository.getUsuarios();    
}

async function getUsuario(id) {
    return await UsuarioRepository.getUsuario(id);
}

async function updateUsuario(usuario) {
    return await UsuarioRepository.updateUsuario(usuario);
}

async function deleteUsuario(id) {
    await UsuarioRepository.deleteUsuario(id);
}

export default {
    createUsuario,
    getUsuarios,
    getUsuario,
    updateUsuario,
    deleteUsuario
}