var connect = require('connect');
var serveStatic = require('serve-static');

//connect.createServer(
//connect.static("C:\Users\Palmer\Documents\webdev")
//).listen(5000);
//

var app = connect();
app.use(serveStatic("./test"));
app.listen(5000);
