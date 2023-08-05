const errorHandler = (err,req,res,next) =>{
  res.send("something went to wrong")
}

module.exports = errorHandler