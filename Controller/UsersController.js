const db = require("../database/models/index");

module.exports = {
    list: (req, res)=>{
        db.user.findAll()
        .then(function(users){
            res.json(users);
        })
    },
    detail: function(req, res){
        db.user.findByPk(req.params.id)
        .then(function(users){
            res.render("detalleTurno", {users:users})
        })
    }
}