const fs = require("fs");

const readstream = fs.createReadStream("./data.txt");

readstream.on("data", (chunk) => {
  console.log("..........");
  console.log(chunk);
});

readstream.on("open", () => {
  console.log("stream is open");
});

setTimeout(() => {
  readstream.pause("pause");
  console.log("steaming is pause");
}, 15);

setTimeout(() => {
  readstream.resume("pause");
  console.log("steaming is resume now");
}, 8000);
