const events = require("events");
const eventEmitter = new events.EventEmitter();

//creating an event
const chitkardbo = () => {
  console.log("oi beta koi tui ?? ami darai asi !!");
};

//assign the handlr into an event
eventEmitter.on("scream", chitkardbo).chitkardbo;

//firing the event
eventEmitter.emit("scream");

/*

----------------------------->>>>>>>>>>module-9


const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    //  fs.readFile("data.txt", (err, data) => {
    //   if (err) {
    //     res.write("Failed to read datas");
    //     res.end();
    //   } else {
    //     res.write(data);
    //     res.end();
    //   }
    // }); 

    //   const data = fs.readFileSync("data.txt");
    // res.write(data);
    // res.end(); 

    fs.writeFile("data.txt", "ha ha ha ha ha  !!!", (err) => {
      if (err) {
        res.write("Data failed to write");
        res.end();
      } else {
        res.write("data written successfully");
        res.end();
      }
    });
  }
});

//console.log(url);

const PORT = 5000;
server.listen(PORT);
console.log(`server is running at ${PORT}`);

 */

/* 
------------------->>>>>>>>>module-8

//Local module
const other = require("./other");

// console.log(other.substract(2, 4));


const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const address_url =
    "http://localhost:5000/contct?name=hasmat&country=bangladesh";
  const parse_url = url.parse(address_url, true);
  const queryObject = parse_url.query;
  console.log(queryObject);
});

//console.log(url);

const PORT = 5000;
server.listen(PORT);
console.log(`server is running at ${PORT}`);

//contct?name=hasmat&country=bangladesh



 */

/* 
module----------7
//Local module
const other = require("./other");

// console.log(other.substract(2, 4));
//core module

var http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ curse: "Node mongodb" }));
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<p>This is home contact</p>");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<p>This is about us</p>");
    res.end();
  }
});

const PORT = 5000;
server.listen(PORT);
console.log(`server is running at ${PORT}`);


*/

/* 

Read the instructions given below and try it:



1 You will have to create a server using core node_modules where there will be a root route (‘/’). 



2 When a user hits the root route(‘/) with GET request you will have to send an HTML file containing ‘‘Welcome to Full Stack Development “.



3 You will have to create a file in the root folder of your project called first.txt containing some text.

For example: “ I am a pull stack developer !!! 🤣 ”



 4 There will be four more routes to handle requests. When a user hits the routes you will have to do the following:



 1 '/read' - to read the first.txt file from the file system using the core fs module



2 '/write' - You have to read the text of the first.txt file and write it to the second.txt file.



3 '/append' - You have to append the text “ No! It will be full not pull ! 😑 ” in the first.txt file.



 4 '/delete' - You have to delete the second.txt file

*/
