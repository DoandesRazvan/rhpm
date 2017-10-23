const express = require('express'),
			process = require('process'),
			app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	var ipaddress = req.headers['x-forwarded-for'],
			language = req.headers['accept-language'].substring(0, req.headers['accept-language'].indexOf(',')),
			software = req.headers['user-agent'].substring(req.headers['user-agent'].indexOf('(') + 1, req.headers['user-agent'].indexOf(')')),
			userInformation = {
				ipaddress: ipaddress,
				language: language,
				software: software
			};
	
	
	res.send(userInformation);
});

app.listen(port);

