const express = require("express");
const { isAuthenticated } = require("../middlewares/auth");
const {
  getMyChat,
  sendAttachments,
  getChatDetails,
  getMessages,
} = require("../controllers/chat");
const { attachmentsMulter } = require("../middlewares/multer");
const {
  sendAttachmentsValidator,
  validateHandler,
  getMessagesValidator,
  getChatDetailsValidator,
} = require("../lib/validators");

const router = express.Router();

router.use(isAuthenticated);

router.get("/getMyChat", getMyChat);
//send attachments
router.post(
  "/message",
  attachmentsMulter,
  sendAttachmentsValidator(),
  validateHandler,
  sendAttachments
);

router.get("/message/:id", getMessagesValidator, validateHandler, getMessages);

router
  .route("/:id")
  .get(getChatDetailsValidator, validateHandler, getChatDetails);

module.exports = router;
