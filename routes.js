import { Router } from "express";
import controllersTarefa from "./controllers/controllers.js";

const routes = Router();

/**
 * Rotas relacionadas às tarefas.
 * Cada rota chama um método correspondente no controller.
 */

// Lista todas as tarefas
// GET /tarefas
routes.get("/tarefas", controllersTarefa.listar);

// Cria uma nova tarefa
// POST /tarefas
routes.post("/tarefas", controllersTarefa.inserir);

// Atualiza uma tarefa existente
// PUT /tarefas/:id
routes.put("/tarefas/:id", controllersTarefa.editar);

// Remove uma tarefa
// DELETE /tarefas/:id
routes.delete("/tarefas/:id", controllersTarefa.excluir);

// Lista uma tarefa específica pelo ID
// GET /tarefas/:id
routes.get("/tarefas/:id", controllersTarefa.listarTask);

export default routes;
