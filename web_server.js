var http = require("http");

http.createServer(function(request, response) {   
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hello, world!\n");
    response.end();
}).listen(8000);
console.log("Running the local web server on port 8000.");
