// var http =require ('http')
// var server=http.createServer(function(req,res)
// {if(req.url=='/')
// {res.write('welcome to index page');
// res.end();
// }else if(req.url=="/emp")
// {res.write('welcom to employee page');
// res.end();

// }else if(req.url=="/admin")
// {res.write('welcome to admin page');
// res.end();
// }else res.end('invalid request!');});
// server.listen(2020);
// console.log('server is runiing at post 2020');


var event=require('event')
var myemitter =new event.EventEmitter(function('anEvent',))
