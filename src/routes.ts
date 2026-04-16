import { Router } from "express";
import { get } from "node:http";

import alunoController from "./controllers/alunos"
import cursoController from "./controllers/cursos"

const routes = Router();

routes.get("/", (request, response) => 
    response.status(200).json("Servidor rodadando")
);

//Rotas de alunos

routes.post("/alunos", alunoController.create)
routes.get("/alunos", alunoController.list)
routes.get("/alunos/:id", alunoController.getById)
routes.put("/alunos/:id", alunoController.update)
routes.delete("/alunos/:id", alunoController.delete)

//Rotas de Cursos

routes.post("/cursos", cursoController.create)
routes.get("/cursos", cursoController.list)
routes.get("/cursos/:id", cursoController.getById)
routes.put("/cursos/:id", cursoController.update)
routes.delete("/cursos/:id", cursoController.delete)

export default routes;