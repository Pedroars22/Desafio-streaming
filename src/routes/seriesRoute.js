import express from "express";
import SerieController from "../controllers/serieController.js";

const router = express.Router();

router.post("/", SerieController.createSerie);
router.get("/", SerieController.getSeries);
router.get("/:id", SerieController.getSerie);
router.put("/", SerieController.updateSerie);
router.delete("/:id", SerieController.deleteSerie);


export default router;