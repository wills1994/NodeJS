const chalk = require('chalk');

const statusMessage = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid Format',
    '500': 'Internal Error'
}

exports.success = function(req, res, message, status){
	let statusCode=status;
	let msgStatus=message;

	if(!status){
		statusCode = 200;
	}
	if(!message){
		msgStatus=msgStatus[status];
	}
	res.status(statusCode).send({
		error: '',
		message: msgStatus
	});
}

exports.error = function(req, res, message, status,details){
	let statusCode=status;
	console.log(chalk.red('[response error]: ' + details));
	
	if(!status){
		statusCode = 500;
	}
	res.status(statusCode).send({
		error: message,
		message: ''
    });
}