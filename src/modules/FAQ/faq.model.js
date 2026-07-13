import mongoose from "mongoose";

// ==============================
// FAQ Schema
// ==============================

const faqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },

    answer: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "General",
        "Booking",
        "Services",
        "Pricing",
        "Production",
      ],
      default: "General",
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

// ==============================
// Enquiry Schema
// ==============================

const enquirySchema = new mongoose.Schema(
  {
    senderName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    subject: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Question",
        "General",
        "Feedback",
        "Booking",
        "Sponsorship",
      ],
      default: "Question",
    },

    status: {
      type: String,
      enum: ["Unread", "Read", "Replied"],
      default: "Unread",
    },

    reply: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// ==============================
// Models
// ==============================

const FAQ = mongoose.model("FAQ", faqSchema);
const Enquiry = mongoose.model("Enquiry", enquirySchema);

export { Enquiry };
export default FAQ;