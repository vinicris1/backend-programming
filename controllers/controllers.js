import serviceTarefa from "../services/service.js";

/**
 * Lista todas as tarefas.
 * Rota GET /tarefas
 */
function listar(req, res) {
    serviceTarefa.listar((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json(result);
    });
}

/**
 * Lista uma tarefa específica pelo ID.
 * Rota GET /tarefas/:id
 */
function listarTask(req, res) {
    const { id } = req.params;

    serviceTarefa.listarPorId(id, (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (!row) {
            return res.status(404).json({ error: "Tarefa não encontrada" });
        }

        return res.status(200).json(row);
    });
}

/**
 * Cria uma nova tarefa.
 * Rota POST /tarefas
 */
function inserir(req, res) {
    const { descricao, concluido } = req.body;

    // Validação básica dos campos
    if (descricao == null || concluido == null) {
        return res.status(400).json({
            error: "Campos obrigatórios faltando: descricao e concluido"
        });
    }

    serviceTarefa.inserir(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        return res.status(201).json(result);
    });
}

/**
 * Atualiza uma tarefa existente.
 * Rota PUT /tarefas/:id
 */
function editar(req, res) {
    const { id } = req.params;

    serviceTarefa.editar(id, req.body, (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (!row) {
            return res.status(404).json({ error: "Tarefa não encontrada" });
        }

        return res.status(200).json(row);
    });
}

/**
 * Exclui uma tarefa pelo ID.
 * Rota DELETE /tarefas/:id
 */
function excluir(req, res) {
    const { id } = req.params;

    serviceTarefa.excluir(id, (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (!row) {
            return res.status(404).json({ error: "Tarefa não encontrada" });
        }

        return res.status(200).json(row);
    });
}

export default {
    listar,
    listarTask,
    inserir,
    editar,
    excluir
};
