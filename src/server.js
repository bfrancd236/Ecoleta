const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db.js")

server.use(express.static("public"))

// habilar o uso do req.body
server.use(express.urlencoded({ extended: true }))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// página inicial
server.get("/", (req, res) => {
    return res.render("./Index.html")
})
server.get("/create-point", (req, res) => {



    return res.render("./create-point.html",)
})

server.post("/savepoint", (req, res) => {
    // req.body: o corpo do nosso formulário

    // inserir dados no db
    const query = `
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
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items,
    ]

    function afterInserData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }

    db.run(query, values, afterInserData)


})


server.get("/search", (req, res) => {

    const search = req.query.search 
    if(search == ""){
        // pesquisa vazia
        return res.render("./search-results.html", {total: 0})
    }



    // pegar os dados da db
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        // mostrar a página html com os dados do db
        return res.render("./search-results.html", { places: rows, total })
        
    })
})


server.listen(3000)