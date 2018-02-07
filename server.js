var server = require('webserver').create(),
    server;

service = server.listen(8080, function(request, response){
  response.statusCode = 200;
  response.write('<html><body>Phantom Server!</body></html>');
});

