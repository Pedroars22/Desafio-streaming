import express from "express";
import FilmeController from "../controllers/filmeController.js";

const router = express.Router();

router.post("/", FilmeController.createFilme);
router.get("/", FilmeController.getFilmes);
router.get("/:id", FilmeController.getFilme);
router.put("/", FilmeController.updateFilme);
router.delete("/:id", FilmeController.deleteFilme);


export default router;