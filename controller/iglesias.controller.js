const pool = require("../database/index")

const iglesiasController = {

    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM  iglesia")
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
            const [rows, fields] = await pool.query("SELECT * FROM iglesia where id= ?", [id])
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
                const {Nombre, Direccion, SitioWeb, UrlLogo, Estado, FechaApertura, IdMinistro} = req.body                
                const sql = "INSERT INTO iglesia (Nombre, Direccion, SitioWeb, UrlLogo, Estado, FechaApertura, IdMinistro) VALUES(?, ?, ?, ?, ?, ?, ?)"
                const [rows, fields] = await pool.query(sql, [Nombre, Direccion, SitioWeb, UrlLogo, Estado, FechaApertura, IdMinistro])
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
                const {Nombre, Direccion, SitioWeb, UrlLogo, Estado, FechaApertura, IdMinistro} = req.body 
                const { id } = req.params
                var sql = "UPDATE iglesia " 
                    sql = sql + " SET Nombre=?, " 
                    sql = sql + "     Direccion=?, " 
                    sql = sql + "     SitioWeb=?, " 
                    sql = sql + "     UrlLogo=?, " 
                    sql = sql + "     Estado=?, " 
                    sql = sql + "     FechaApertura=?, " 
                    sql = sql + "     IdMinistro=? "
                    sql = sql + " WHERE Id =? "
                const [rows, fields] = await pool.query(sql, [Nombre, Direccion, SitioWeb, UrlLogo, Estado, FechaApertura, IdMinistro, id])
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

    deleteIglesia: async (req, res) => {
        try {
                const { id } = req.params
                const sql = "DELETE FROM iglesia WHERE Id =? "
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

module.exports = iglesiasController