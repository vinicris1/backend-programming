import { Router } from "express";
import controllersTarefa from "./controllers/controllers.js";

const routes = Router();

// This will create routes from our database to response the API requests

//Ex: if the api request a get this will execute the first line, which will list all files inside the DB

routes.get("/tarefas", controllersTarefa.Listar);

routes.post("/tarefas", controllersTarefa.Inserir);

routes.put("/tarefas/:id_tarefa", controllersTarefa.Editar);

routes.delete("/tarefas/:id_tarefa", controllersTarefa.Excluir);

routes.get("/tarefas/:id", controllersTarefa.ListarTask);

export default routes;