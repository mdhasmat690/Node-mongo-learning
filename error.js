const erroHandler = require("./erroHandler.js");
async function getData() {
  try {
    // undefined.find();
    const emailError = new Error("Email already exists!");
    throw emailError;
  } catch (error) {
    erroHandler(error);
  }
}
getData;

console.log("done");
