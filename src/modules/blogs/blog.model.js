import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Lifestyle",
        "Marketing",
        "Branding",
        "Creator Journey",
        "Tips",
        "Latest News",
      ],
      default: "Branding",
    },

    author: {
      type: String,
      trim: true,
      default: "Admin",
    },

    coverImage: {
      type: String,
      default: "",
    },

    // Frontend & Common CRUD field
    video: {
      type: String,
      default: "",
    },

    // Frontend me Short Excerpt hai
    excerpt: {
      type: String,
      default: "",
      trim: true,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },

    publishDate: {
      type: Date,
      default: Date.now,
    },

    readTime: {
      type: String,
      default: "5 min read",
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },

    // Frontend switch
    active: {
      type: Boolean,
      default: true,
    },

    // Frontend switch
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;