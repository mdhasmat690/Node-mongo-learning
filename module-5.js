//Local module
const { nam, add } = require("./other");

//core module
const http = require("http");
const server = http.createServer(function (req, res) {
  //   console.log("sarver is runnning");
});
// server.listen(5000);

//third party module --> underscore
const _ = require("underscore");

// console.log(nam);
// console.log(add(2, 3));

//third party module --> underscore
var stooges = [
  { name: "moe", age: 40 },
  { name: "larry", age: 50 },
  { name: "curly", age: 60 },
];
const res = _.pluck(stooges, "age");
console.log(res);
