const mongoose = require("mongoose");

const universitySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    faculties: [
      {
        type: mongoose.Types.ObjectId,
        ref: "faculty",
        required: false,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("university", universitySchema);
