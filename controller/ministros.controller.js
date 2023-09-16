const pool = require("../database/index")

const ministrosController = {

    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM  ministro WHERE Estado = 'A'  ")
            res.json({
                data:rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("SELECT * FROM ministro WHERE Id= ? AND Estado = 'A'", [id])
            res.json({
                data:rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },

    add: async (req, res) => {
        try {
                const {Nombres, Apellidos, ApellidoCasada, Direccion, FechaNacimiento, Genero, NumeroIdentificacion, Estado} = req.body                
                const sql = "INSERT INTO ministro (Nombres, Apellidos, ApellidoCasada, Direccion, FechaNacimiento, Genero, NumeroIdentificacion, Estado) VALUES(?, ?, ?, ?, ?, ?, ?,?)"
                const [rows, fields] = await pool.query(sql, [Nombres, Apellidos, ApellidoCasada, Direccion, FechaNacimiento, Genero, NumeroIdentificacion, Estado])
                res.json({
                    data:rows
                })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },

    update: async (req, res) => {
        try {
                const {Nombres, Apellidos, ApellidoCasada, Direccion, FechaNacimiento, Genero, NumeroIdentificacion, Estado} = req.body 
                const { id } = req.params
                var sql = "UPDATE ministro " 
                    sql = sql + " SET Nombre =?, " 
                    sql = sql + "     Apellidos =?, " 
                    sql = sql + "     ApellidoCasada =?, " 
                    sql = sql + "     Direccion =?, " 
                    sql = sql + "     FechaNacimiento =?, " 
                    sql = sql + "     Genero =?, " 
                    sql = sql + "     NumeroIdentificacion =?, "
                    sql = sql + "     Estado =? "
                    sql = sql + " WHERE Id =? "
                const [rows, fields] = await pool.query(sql, [Nombres, Apellidos, ApellidoCasada, Direccion, FechaNacimiento, Genero, NumeroIdentificacion, Estado, id])
                res.json({
                    data:rows
                })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },

    delete: async (req, res) => {
        try {
                const { id } = req.params
                const sql = "DELETE FROM ministro WHERE Id =? "
                const [rows, fields] = await pool.query(sql, [id])
                res.json({
                    data:rows
                })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }

}

module.exports = ministrosController