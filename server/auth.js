const { errorHandler } = require("../utils/utility");
const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies["token"];

    if (!token) {
      return next(new errorHandler("please login to access this route", 401));
    }

    const decodedData = jwt.verify(token, "secret");
    req.user = decodedData.id;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  isAuthenticated,
};
