import mongoose from "mongoose";

const socialLinkSchema = new mongoose.Schema(
  {
    platform: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      trim: true,
    },
    order: {
      type: Number,
      default: 1,
    },
  },
  { _id: false }
);

const seoSchema = new mongoose.Schema(
  {
    // Global Toggles
    globalToggles: {
      enableSEO: { type: Boolean, default: true },
      allowIndexing: { type: Boolean, default: true },
      autoSitemap: { type: Boolean, default: true },
      autoRobots: { type: Boolean, default: true },
      forceHTTPS: { type: Boolean, default: true },
      enableSchema: { type: Boolean, default: true },
    },

    // Website Info
    websiteName: {
      type: String,
      trim: true,
    },

    websiteUrl: {
      type: String,
      trim: true,
    },

    defaultTitle: {
      type: String,
      trim: true,
    },

    canonicalURL: {
      type: String,
      trim: true,
    },

    defaultDescription: {
      type: String,
      trim: true,
    },

    defaultKeywords: {
      type: String,
      trim: true,
    },

    // Open Graph
    defaultOGTitle: String,
    defaultOGDescription: String,
    defaultOGImage: String,

    twitterCard: String,
    twitterSite: String,
    twitterCreator: String,

    // Analytics
    analytics: {
      googleAnalyticsId: String,
      gtmId: String,
      metaPixelId: String,
      clarityId: String,
      linkedinInsight: String,
      customHeaderScript: String,
      customFooterScript: String,
    },

    // Social Links
    socialLinks: [socialLinkSchema],

    // Business Information
    businessInformation: {
      name: String,
      type: String,
      email: String,
      phone: String,
      address: String,
      city: String,
      state: String,
      country: String,
      postalCode: String,
      latitude: String,
      longitude: String,
      logo: String,
    },

    // Verification Codes
    verificationCodes: {
      google: String,
      bing: String,
      yandex: String,
      pinterest: String,
    },

    // Robots & Sitemap
    robotsSettings: {
      type: String,
      default: "",
    },

    sitemapSettings: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("SEO", seoSchema);