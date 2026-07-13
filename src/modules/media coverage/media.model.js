import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    mediaOutlet: {
      type: String,
      required: true,
      trim: true,
    },

    format: {
      type: String,
      enum: [
        "Magazine Features",
        "Press Releases",
        "Podcasts",
      ],
      default: "Magazine Features",
    },

    date: {
      type: Date,
    },

    url: {
      type: String,
      trim: true,
    },

    thumbnail: {
      type: String,
      required: true,
      trim: true,
    },

    // ✅ Video Upload
    video: {
      type: String,
      default: "",
      trim: true,
    },

    detailedExcerpt: {
      type: String,
      trim: true,
    },

    metrics: {
      type: String,
      trim: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Media = mongoose.model("Media", mediaSchema);

export default Media;