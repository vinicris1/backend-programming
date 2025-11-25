import sqlite3 from "sqlite3";

/**
 * Script SQL para criação da tabela de tarefas.
 * Executado apenas se a tabela ainda não existir.
 */
const CREATE_TABLES_SQL = `
  CREATE TABLE IF NOT EXISTS tarefas (
    id_tarefa INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    concluido CHAR(1) NOT NULL
  );
`;

// Ativa logs detalhados do SQLite (útil para debug)
const SQLite3 = sqlite3.verbose();

/**
 * Inicializa a conexão com o banco de dados.
 * Caso o arquivo 'banco.db' não exista, ele é criado automaticamente.
 * Em seguida, cria a estrutura inicial do banco (CREATE TABLE).
 *
 * @returns {sqlite3.Database} Instância do banco de dados SQLite.
 */
function initializeDatabase() {
    const db = new SQLite3.Database(
        "banco.db",
        SQLite3.OPEN_CREATE | SQLite3.OPEN_READWRITE,
        (err) => {
            if (err) {
                return console.error(`Erro ao abrir o banco: ${err.message}`);
            }

            console.log("Conexão com o banco de dados aberta.");

            // Criação das tabelas
            db.exec(CREATE_TABLES_SQL, (err) => {
                if (err) {
                    return console.error(`Erro ao criar estrutura do banco: ${err.message}`);
                }
                console.log("Estrutura do banco de dados verificada/criada.");
            });
        }
    );

    return db;
}

// Inicializa e exporta a instância do banco
export const db = initializeDatabase();
