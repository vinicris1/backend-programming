import { db } from "../database/database.js";

/**
 * Função auxiliar para executar queries e padronizar callbacks.
 */
function executeQuery(method, sql, params, callback) {
    db[method](sql, params, (err, result) => {
        callback(err, result);
    });
}

/**
 * Lista todas as tarefas.
 * @param {Function} callback Função que recebe (err, rows)
 */
function listar(callback) {
    const sql = "SELECT * FROM tarefas";
    executeQuery("all", sql, [], callback);
}

/**
 * Busca uma tarefa pelo ID.
 * @param {number} id ID da tarefa
 * @param {Function} callback Função que recebe (err, row)
 */
function listarPorId(id, callback) {
    const sql = "SELECT * FROM tarefas WHERE id_tarefa = ?";
    executeQuery("get", sql, [id], callback);
}

/**
 * Insere uma nova tarefa.
 * @param {Object} body Objeto contendo { descricao, concluido }
 * @param {Function} callback Função que recebe (err, row)
 */
function inserir(body, callback) {
    const sql = `
        INSERT INTO tarefas (descricao, concluido) 
        VALUES (?, ?) 
        RETURNING *
    `;
    executeQuery("get", sql, [body.descricao, body.concluido], callback);
}

/**
 * Atualiza uma tarefa existente.
 * @param {number} id ID da tarefa
 * @param {Object} body Objeto contendo os novos valores
 * @param {Function} callback Função que recebe (err, row)
 */
function editar(id, body, callback) {
    const sql = `
        UPDATE tarefas 
        SET descricao = ?, concluido = ? 
        WHERE id_tarefa = ?
        RETURNING *
    `;
    executeQuery("get", sql, [body.descricao, body.concluido, id], callback);
}

/**
 * Remove uma tarefa existente.
 * @param {number} id ID da tarefa
 * @param {Function} callback Função que recebe (err, row)
 */
function excluir(id, callback) {
    const sql = `
        DELETE FROM tarefas 
        WHERE id_tarefa = ? 
        RETURNING *
    `;
    executeQuery("get", sql, [id], callback);
}

export default {
    listar,
    listarPorId,
    inserir,
    editar,
    excluir
};
