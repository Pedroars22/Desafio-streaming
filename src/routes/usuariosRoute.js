import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/", UsuarioController.createUsuario);
router.get("/", UsuarioController.getUsuarios);
router.get("/:id", UsuarioController.getUsuario);
router.put("/", UsuarioController.updateUsuario);
router.delete("/:id", UsuarioController.deleteUsuario);

export default router;