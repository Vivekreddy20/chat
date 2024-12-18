const getOtherMember = (members, userId) => {
  return members.find((member) => {
    return member._id.toString() !== userId.toString();
  });
};

const getSockets = (users = []) => {
  const sockets = users.map((user) => userSocketIDs.get(user._id.toString()));
  return sockets;
};

const getBase64 = (file) =>
  `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;

module.exports = { getOtherMember, getSockets, getBase64 };
