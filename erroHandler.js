function erroHandler(error) {
  const { name, message, stack } = error;
  console.log(name, message);
  logger.error({
    name,
    message,
    stack,
  });

  console.log("Internal server error");
}

module.exports = erroHandler;
