const {Role} = require('../models');

const roleController = {}

// CREAR NUEVOS ROLES (REQUIERE SER ADMIN)

roleController.createRole = async(req,res)=>{
    try{
        const {privilege} = req.body;

        const newPrivilage = {
            privilege
        }
        const role = await Role.create(newPrivilage)
        return res.json(role)
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = roleController;
