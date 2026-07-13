import mongoose from "mongoose";

const pageSEOSchema = new mongoose.Schema(
  {
    pageName: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    useGlobalSEO: {
      type: Boolean,
      default: true,
    },

    metaTitle: {
      type: String,
      trim: true,
      default: "",
    },

    metaDescription: {
      type: String,
      trim: true,
      default: "",
    },

    keywords: {
      type: String,
      trim: true,
      default: "",
    },

    canonicalURL: {
      type: String,
      trim: true,
      default: "",
    },

    ogTitle: {
      type: String,
      trim: true,
      default: "",
    },

    ogDescription: {
      type: String,
      trim: true,
      default: "",
    },

    ogImage: {
      type: String,
      default: "",
    },

    robots: {
      type: String,
      enum: [
        "index, follow",
        "noindex, nofollow",
        "noindex, follow",
      ],
      default: "index, follow",
    },

    priority: {
      type: Number,
      min: 0,
      max: 1,
      default: 0.5,
    },

    changeFrequency: {
      type: String,
      enum: [
        "always",
        "hourly",
        "daily",
        "weekly",
        "monthly",
        "yearly",
        "never",
      ],
      default: "monthly",
    },

    lastModified: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const PageSEO = mongoose.model("PageSEO", pageSEOSchema);

export default PageSEO;