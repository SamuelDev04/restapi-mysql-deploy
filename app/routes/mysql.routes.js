import { Router } from "express";
import * as taskController from "../controllers/mysql.controller";

const router = Router();

router.post('/', taskController.createTask);

router.get('/', taskController.findAllTasks);

router.get('/ping', taskController.pingTask);

router.get('/:id', taskController.findOneTask);

router.put('/:id', taskController.updateTask);

router.delete('/:id', taskController.deleteTask);


export default router;