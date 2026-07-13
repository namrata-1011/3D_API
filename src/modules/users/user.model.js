import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    role: {
      type: String,
      enum: [
        "Super Admin",
        "Editor",
        "Analyst",
        "Writer",
      ],
      default: "Editor",
    },

    status: {
      type: String,
      enum: [
        "Active",
        "Suspended",
      ],
      default: "Active",
    },

    imageUrl: {
      type: String,
      default: "",
    },

    lastActive: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;