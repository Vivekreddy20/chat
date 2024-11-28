const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");
const { v2 } = require("cloudinary");
const { v4 } = require("uuid");
const { getBase64 } = require("../lib/helper");

const options = {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: true,
};

const connectDb = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log("err", err);
    });
};

const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ id: user._id }, "secret");
  return res.status(code).cookie("token", token, options).json({
    success: true,
    message,
  });
};

const emitEvent = (req, event, users, data) => {
  console.log("emmiting event", event);
};

const deleteFilesFromCloudinary = async (public_ids) => {
  //delete files from cloudinary
};

const uploadFilesToCloudinary = async (files = []) => {
  const uploadPromises = files.map((file) => {
    return new Promise((resolve, reject) => {
      v2.uploader.upload(
        getBase64(file),
        { resource_type: "auto", public_id: v4() },
        (error, result) => {
          if (error) {
            return reject(error);
          }
          resolve(result);
        }
      );
    });
  });

  try {
    const results = await Promise.all(uploadPromises);
    const formattedResults = results.map((result) => ({
      public_id: result.public_id,
      url: result.secure_url,
    }));
    return formattedResults;
  } catch (error) {
    throw new Error("Error uploading files to cloudinary" + error);
  }
};

module.exports = {
  connectDb,
  sendToken,
  options,
  emitEvent,
  deleteFilesFromCloudinary,
  uploadFilesToCloudinary,
};
