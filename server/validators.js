const { body, validationResult, query } = require("express-validator");
const { errorHandler } = require("../utils/utility");

const registerValidator = () => [
  body("name", "please enter name").notEmpty(),
  body("username", "please enter username").notEmpty(),
  body("password", "please enter password").notEmpty(),
  body("bio", "please enter bio").notEmpty(),
];

const loginValidator = () => [
  body("username", "please enter username").notEmpty(),
  body("password", "please enter password").notEmpty(),
];

const sendAttachmentsValidator = () => [
  body("chatId", "enter valid chat id").notEmpty(),
];

const getMessagesValidator = () => [
  param("id", "please enter chat id").notEmpty(),
];

const getChatDetailsValidator = () => [
  param("id", "please enter chat id").notEmpty(),
];

const sendRequestValidator = () => [
  body("userId", "please enter userId").notEmpty(),
];

const acceptRequestValidator = () => [
  body("requestId", "please enter RequestId").notEmpty(),
  body("accept", "please add accept")
    .notEmpty()
    .withMessage("please add accept")
    .isBoolean()
    .withMessage("accept must be boolean"),
];

const validateHandler = (req, res, next) => {
  const errors = validationResult(req);
  const errorMessages = errors
    .array()
    .map((error) => error.msg)
    .join(",");
  console.log(errorMessages);

  if (errors.isEmpty()) return next();
  else {
    next(new errorHandler(`${errorMessages}`, 400));
  }
};

module.exports = {
  registerValidator,
  validateHandler,
  loginValidator,
  sendAttachmentsValidator,
  getMessagesValidator,
  getChatDetailsValidator,
  sendRequestValidator,
  acceptRequestValidator,
};
