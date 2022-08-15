const Friend = require("../models/friend");
const ObjectId = require("mongodb").ObjectId;
const FriendsController = {
  Add: (req, res) => {
    console.log("controller is working!");
    console.log("THis is the request body: ", req.body);
    console.log("session id", req.session);
    const friendship = new Friend({
      requester: req.session.user._id,
      recipient: req.body.content,
      status: 0,
    });
    friendship.save((err) => {
      if (err) {
        throw err;
      }
    });
    res.status(201).redirect("/");
  },
  Accept: async (req, res) => {
    console.log("Accept method called on controller:", req.params.id);
    await Friend.findOneAndUpdate({ requester: req.params.id }, { status: 1 });
    res.status(201).redirect(`/users/profile/${req.session.user.username}`);
  },
};

module.exports = FriendsController;
