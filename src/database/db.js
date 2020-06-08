// importar
const sqlite3 = require("sqlite3").verbose()

// iniciar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// utilizar o objeto de banco de dados, para operação
db.serialize(() => {
    // criar uma tabela
    /* db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `) */

    // inserir dados
    /* const query= `
        INSERT INTO places (
            image, 
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `   

    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "Papersider",
        "Guilherme Gemballa, Jardmin América",
        "Número 260",
        "Santa Caterina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInserData(err){
        if(err){
           return console.log(err)
    }
    
    console.log("Cadastrado com sucesso")
    console.log(this)
    }

    db.run(query, values, afterInserData) */
   
    // Consultar dados
    /* db.all(`SELECT name FROM places`, function(err, rows){
        if(err){
            return console.log(err)
     }

     console.log("Aqui estão seus registros: ")
     console.log(rows)
     }) */
    
    // Deletar dados

    /* db.run(`DELETE FROM places WHERE id = ?`, [4], function (err) {
        if(err){
           return console.log(err)
    }
    
        console.log("Registo deletado com sucesso!")
    }) */
})