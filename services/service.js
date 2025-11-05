import { db } from "../database/database.js";

// CRUD Functions down below xD

// Read function
function Listar(FunctionCallback){
    let sql = 'select * from tarefas';

    db.all(sql, [], function (err, rows) { //all: consulta e retorna todos os resultados como um array de OBJ.
        FunctionCallback(err, rows);
    })
}

// Create function
function Inserir(body, FunctionCallback){
    db.all('insert into tarefas(descricao, concluido) values(?, ?) returning id_tarefa', 
        [body.descricao, body.concluido], function(err, rows){
        FunctionCallback(err,rows);
    })
}

// Update function
function Editar(id_tarefa, body, FunctionCallback){
    db.all('update tarefas set descricao=?, concluido=? where id_tarefa=? returning id_tarefa',
        [body.descricao, body.concluido, id_tarefa], function (err, rows) {
        FunctionCallback(err, rows);
    })
}

// Delete function
function Excluir(id_tarefa, FunctionCallback){
    db.all('delete from tarefas where id_tarefa=? returning id_tarefa', [id_tarefa], function (err, rows) {
            FunctionCallback(err, rows);
        })
}

// Export all the functions to be used in 
export default {Listar, Inserir, Editar, Excluir};