var express = require('express');
var app= express();
PORT= 3000;


var middleware= {
   requireAuthentication: function(req, res, next){
  console.log('private route hit');

next();
   },
   logger: function(req, res, next){

   	console.log('Request: '+new Date().toString() +' '+req.method +' '+ req.originalUrl);
   	next();
   }

};

//app.use(middleware.requireAuthentication);
// app.get('/', function(req, res){

// res.send('Samsu kopa');
// });

app.use(middleware.logger);
app.get('/about', middleware.requireAuthentication, function(req, res){

res.send('About Us');
});

app.use(express.static(__dirname +'/public'));
// C:\Users\zma\Desktop\node-projects\web-server
app.listen(PORT, function(){

console.log('Express server has started on port ' +PORT+ ' !')
});