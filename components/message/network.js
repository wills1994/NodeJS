const express =  require('express');
const response = require('../../network/response');
const router = express.Router();
const controller = require('./controller');


    router.get("/",function(req, res){
        
        controller.getList(req.body.user,req.body.message)
            .then((messageList) => {
                response.success(req,res,messageList,200); 
            })
            .catch( e => {
                response.error(req,res,'Error',500,e); 
            });
    });
    
    router.post("/",function(req, res){
        res.header({
            "custom-header": "Nuestro valor predeterminado"
        });
        controller.addMessages(req.body.user,req.body.message)
            .then((fullMessage) => {
                response.success(req,res,fullMessage,201); 
            })
            .catch( e => {
                response.error(req,res,'Información inválida',400,'Error en el controlador'); 
            });
    });
module.exports= router;