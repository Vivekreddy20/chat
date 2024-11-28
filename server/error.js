const errorMiddleware = (err, req, res, next) => {
  err.message ||= "Internal serve error";
  err.statusCode ||= 500;
  if (err.code === 11000) {
    err.message = "duplicate key error";
    err.statusCode = 400;
  }

  if (err.name === "CastError") {
    err.message = "invalid format of errorpath";
    err.statusCode = 400;
  }

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

module.exports = { errorMiddleware };
