const express =  require('express');
const response = require('../../network/response');
const router = express.Router();
const controller = require('./controller');

router.post('/',function(req,res){
    controller.addUser(req.body.name)
    .then(data => {
        response.success(req,res,data,201);
    })
    .catch(err => {
        response.err(req,res,'Internal error',500,err);
    });
});

router.get("/", function(req, res) {
    controller.getChats()
      .then(data => {
        response.success(req, res, data, 200);
      })
      .catch(err => {
        response.err(req, res, "Internal error", 500, err);
      });
});

module.exports = router;