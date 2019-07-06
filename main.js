const clear =require("clear");
var request = require('request');
const http = require("http");
const server = http.createServer((req , res) => {
    if(req.url == '/')
    {
        res.write("Hellow Wobbbbld -- !");
        res.end();
    }
    else if(req.url == '/book')
    {
        res.write(JSON.stringify([
            {name:'Fisrst Learing Javascript book'},
            {name:'Last Learing Javascript book'}
        ]));
       res.end();
    }
    else if (req.url == "/posts") {
    request("https://jsonplaceholder.typicode.com/posts", function(
        error,
        response,
        body
    ) {
        // console.log("error:", error); // Print the error if one occurred
        // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
        // console.log("body:", body); // Print the HTML for the Google homepage.
        res.write(body);
        res.end();
    });
    }
}) 
const port = (3000);
server.listen(port);
console.log('Your Local Server',port,'has been Run. Please check on Web ');
