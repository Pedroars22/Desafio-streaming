import express from "express";
import AssistindoController from "../controllers/assistindoController.js";

const router = express.Router();

router.post("/", AssistindoController.createAssistindo);
router.get("/", AssistindoController.getAssistidos);
router.get("/:id", AssistindoController.getAssistindo);
router.put("/", AssistindoController.updateAssistindo);
router.delete("/:id", AssistindoController.deleteAssistindo);

export default router;