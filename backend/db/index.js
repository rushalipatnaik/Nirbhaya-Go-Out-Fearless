const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  contacts: {
    type: [String],
  },
});

// the user model
module.exports = mongoose.model("User", userSchema);
