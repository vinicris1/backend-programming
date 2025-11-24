import { db } from "../database/database.js";

// CRUD Functions down below xD

// Read function
function Listar(FunctionCallback){
    let sql = 'select * from tarefas';

    db.all(sql, [], function (err, rows) { //all: consulta e retorna todos os resultados como um array de OBJ.
        FunctionCallback(err, rows);
    })
}

function ListarTask(id, callback) {
    const sql = "SELECT * FROM tarefas WHERE id_tarefa = ?";

    db.get(sql, [id], function (err, row) {
        callback(err, row);
    });
}

// Create function
function Inserir(body, FunctionCallback){
    db.all('insert into tarefas(descricao, concluido) values(?, ?) returning *', 
        [body.descricao, body.concluido], function(err, row){
        FunctionCallback(err,row);
    })
}

// Update function
function Editar(id_tarefa, body, FunctionCallback){
    db.get('update tarefas set descricao=?, concluido=? where id_tarefa=? returning *',
        [body.descricao, body.concluido, id_tarefa], function (err, row) {
        FunctionCallback(err, row);
    })
}

// Delete function
function Excluir(id_tarefa, FunctionCallback){
    db.get('delete from tarefas where id_tarefa=? returning *', [id_tarefa], function (err, row) {
            FunctionCallback(err, row);
        })
}

// Export all the functions to be used in 
export default {Listar, Inserir, Editar, Excluir, ListarTask};