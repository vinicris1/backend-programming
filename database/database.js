import sqlite3 from "sqlite3";

// Variable which will be used to create the DB structure if not already created.
const CREATE_TABLES_SQL = `
  CREATE TABLE IF NOT EXISTS tarefas (
    id_tarefa INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    concluido CHAR(1) NOT NULL
  );
`;

const SQLite3 = sqlite3.verbose();   //verbose fornece mais detalhes no console sobre as operações

// Lets create a function to open the DB connection | if the DB isn't created yet, this will create this :D
function initializeDatabase() {
    // Create the DB if isn't exist yet
    const db = new SQLite3.Database('banco.db', SQLite3.OPEN_CREATE | SQLite3.OPEN_READWRITE, function(err) {
        if (err) {
            return console.log(`Database open error: ${err.message}`); // for some reason if can't open the connection we will know
        }
        console.log('Database connection open');

        
        db.exec(CREATE_TABLES_SQL, function(err) {
            if (err) {
                return console.error(`Failed to create the database structure: ${err.message}`);
            }
            console.log('Database structure created');
        });
    });

    return db;
}


const db = initializeDatabase();

// Export the database connection
export { db };