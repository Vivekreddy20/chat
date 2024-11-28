const express = require("express");
const {
  login,
  newUser,
  getProfile,
  logout,
  searchUser,
  sendFriendRequest,
  getMyNotifications,
  acceptFriendRequest,
  getMyFriends,
} = require("../controllers/userRoute");
const router = express.Router();

const { singleAvatar } = require("../middlewares/multer");
const { isAuthenticated } = require("../middlewares/auth");
const {
  registerValidator,
  validateHandler,
  loginValidator,
  sendRequestValidator,
  acceptRequestValidator,
} = require("../lib/validators");

router.post(
  "/new",
  singleAvatar,
  registerValidator(),
  validateHandler,
  newUser
);
router.post("/login", loginValidator(), validateHandler, login);

router.use(isAuthenticated);

router.get("/get", getProfile);

router.get("/logout", logout);

router.get("/search", searchUser);

router.put(
  "/sendrequest",
  sendRequestValidator(),
  validateHandler,
  sendFriendRequest
);
router.put(
  "/accept-request",
  acceptRequestValidator(),
  validateHandler,
  acceptFriendRequest
);

router.get("/notification", getMyNotifications);

router.get("/friends", getMyFriends);

module.exports = router;
