import serviceTarefa from "../services/service.js";

// This will execute the select with the parameters requested in the GET in our DB 
function Listar(req, res){
    serviceTarefa.Listar(function(err, result){
        if (err){
            res.status(500).send(err); // if occur any error this will get the error inside the html status 500 and send in the API
        } else {
            res.status(200).json(result);
        }
    });
}

function ListarTask(req, res) {
    const { id } = req.params;

    serviceTarefa.ListarTask(id, function(err, row) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (!row) {
            return res.status(404).json({ error: "Tarefa não encontrada" });
        }

        res.status(200).json(row);
    });
}

// Execute the create with the parameters use in the POST
function Inserir(req, res) {
    serviceTarefa.Inserir(req.body, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(result[0]);
        }
    });    
}

// Execute the update with the parameters use in the PUT
function Editar(req, res) {
    serviceTarefa.Editar(req.params.id_tarefa, req.body, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result[0]);
        }
    });
}

// Exeecute the delete with the parametes used in the DELETE
function Excluir(req, res) {
    serviceTarefa.Excluir(req.params.id_tarefa, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result[0]);
        }
    });
}


// Export to be used when imported in
export default {Listar, Inserir, Editar, Excluir, ListarTask};