const express = require('express');
const response = require('../../network/response');

const router = express.Router();
const controller = require('./controller');
/*
{
	"users": [
		"5e4c20062a03370944489693",
		"5e4c200c2a03370944489694"
	]
}
*/

router.post('/', function(req, res){
    controller.addChat(req.body.users)
    .then((data)=>{
        response.success(req, res, data, 201);
    })
    .catch(err=>{
        response.error(req, res, 'Internal error', 500, err)
    })
});
//http://localhost:3000/chat/5e4c20062a03370944489693

/*
{
  "error": "",
  "message": [
    {
      "users": [
        {
          "_id": "5e4c20062a03370944489693",
          "name": "Wilson",
          "__v": 0
        },
        {
          "_id": "5e4c200c2a03370944489694",
          "name": "Nelson",
          "__v": 0
        }
      ],
      "_id": "5e4c285d8379792f54c3ac44",
      "__v": 0
    }
  ]
}*/ 
router.get('/:userId', function(req, res){
    controller.listChats(req.params.userId)
    .then(users=>{
        response.success(req, res, users, 200);
    })
    .catch(err=>{
        response.error(req, res, '', 500, err);
    })
})

module.exports = router;