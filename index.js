var express = require('express');
var app = express();
const figlet = require('figlet');
const clear = require('clear');
var request = require('request');

const port = 3000
const fetch = require('node-fetch');

clear();
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(json => document.write(json));


// let http = require("http");

// let a = http.createServer(function(req, res) {
//   if (req.url == "/") {
//     res.write("hello World");
//     res.end();
//   } else if (req.url == "/books") {
//     res.write(JSON.stringify([{ name: "Talha", Age: 20 }]));
//     res.end();
//   } else if (req.url == "/posts") {
//     request("https://jsonplaceholder.typicode.com/posts", function(
//       error,
//       response,
//       body
//     ) {
//       console.log("error:", error); // Print the error if one occurred
//       console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//       console.log("body:", body); // Print the HTML for the Google homepage.
//       res.write(body);
//       res.end();
//     });
//   }
// });

// var port = 3000;
// a.listen(port); //the server object listens on port 8080
// console.log(port);

// var request = require("request");




// var request = require('request');
 
// var options = {
//   url: 'https://jsonplaceholder.typicode.com/posts',
//   headers: {
//     'User-Agent': 'request'
//   }
// };
 
// function callback(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     var info = JSON.parse(body);
//     console.log(info.stargazers_count + "i");
//     // console.log(info.forks_count + " Forks");
//   }
// }
 
// request(options, callback);
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => {
//   console.log(data) // Prints result from `response.json()` in getRequest
// })
// .catch(error => console.error(error))


// async function getGithubData()
// {
//   let data = await fetch('https://jsonplaceholder.typicode.com/posts');
//   let main = await data.json(); 
//   console.log(main);
// }
// app.get('/', (req, res) => {
//             res.send('please <a href="http://localhost:3000/posts">click here</a> to veiw JSON file')
//         })

// getGithubData();

// console.log(figlet.textSync('Calling External API From Server', {}));
// request('https://jsonplaceholder.typicode.com/posts', function (error, response, body) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     //   console.log('body:', body); // Print the HTML for the Google homepage.
//     app.get('/', (req, res) => {
//         res.send('please <a href="http://localhost:3000/posts">click here</a> to veiw JSON file')
//     })
//     app.get('/posts', (req, res) => {
//         res.send(body)
//     })
//     app.use(function (req, res, next) {
//         res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
//     });
// });
// app.listen(port, () => {
//     console.log(`Listening on port: ${port}`)
// })