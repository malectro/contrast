var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic(__dirname));

var server = app.listen(3000);
