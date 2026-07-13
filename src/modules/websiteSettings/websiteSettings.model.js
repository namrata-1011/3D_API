import mongoose from "mongoose";

const websiteSettingsSchema = new mongoose.Schema(
  {
    // ==========================
    // General Settings
    // ==========================
    siteName: {
      type: String,
      trim: true,
    },

    siteTagline: {
      type: String,
      trim: true,
    },

    maintenanceMode: {
      type: Boolean,
      default: false,
    },

    timezone: {
      type: String,
      default: "Asia/Kolkata",
    },

    language: {
      type: String,
      default: "en",
    },

    // ==========================
    // Logo & Favicon
    // ==========================
    logo: {
      type: String,
      default: "",
    },

    favicon: {
      type: String,
      default: "",
    },

    appleTouchIcon: {
      type: String,
      default: "",
    },

    // ==========================
    // Social Links
    // ==========================
    facebook: {
      type: String,
      default: "",
    },

    instagram: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    twitter: {
      type: String,
      default: "",
    },

    youtube: {
      type: String,
      default: "",
    },

    // ==========================
    // Contact Details
    // ==========================
    email: {
      type: String,
      trim: true,
      default: "",
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    whatsapp: {
      type: String,
      trim: true,
      default: "",
    },

    address: {
      type: String,
      trim: true,
      default: "",
    },

    googleMap: {
      type: String,
      default: "",
    },

    // ==========================
    // Footer Settings
    // ==========================
    copyright: {
      type: String,
      default: "",
    },

    footerDescription: {
      type: String,
      default: "",
    },

    footerLinks: [
      {
        title: String,
        url: String,
      },
    ],

    // ==========================
    // Email Configuration
    // ==========================
    smtpHost: {
      type: String,
      default: "",
    },

    smtpPort: {
      type: Number,
      default: 587,
    },

    smtpUser: {
      type: String,
      default: "",
    },

    smtpPassword: {
      type: String,
      default: "",
    },

    smtpFromEmail: {
      type: String,
      default: "",
    },

    smtpFromName: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "WebsiteSettings",
  websiteSettingsSchema
);