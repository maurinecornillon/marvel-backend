const mongoose = require("mongoose");

const Hote = mongoose.model("Hote", {
  email: {
    unique: true,
    type: String,
  },
  account: {
    username: {
      required: true,
      type: String,
    },
  },

  token: String,
  hash: String,
  salt: String,
});

// export des models
module.exports = Hote;
