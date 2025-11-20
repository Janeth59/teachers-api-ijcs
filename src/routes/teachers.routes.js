//aqui solo iran las rutas que pertenecen unicamente a los profes
import { Router } from "express";
import teachersControllers from "../controllers/teachers.controllers.js";
const router = Router();

router.get("/getAll", teachersControllers.getAll); //get
router.get("/getOne/:teacher_id", teachersControllers.getOne); //get
router.post("/insertOne", teachersControllers.insertOne); //post
router.put("/updateOne/:teacher_id", teachersControllers.updateOne); //post
router.delete("/deleteOne/:teacher_id", teachersControllers.deleteOne); //get

export default router;