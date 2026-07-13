import {
  getSEOService,
  updateSEOService,
} from "./seo.service.js";

import { updateSEOValidation } from "./seo.validation.js";

// Get SEO Settings
export const getSEO = async (req, res, next) => {
  try {
    const seo = await getSEOService();

    return res.status(200).json({
      success: true,
      message: "SEO settings fetched successfully.",
      data: seo,
    });
  } catch (error) {
    next(error);
  }
};

// Update SEO Settings
export const updateSEO = async (req, res, next) => {
  try {
    const { error } = updateSEOValidation.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details.map((err) => err.message).join(", "),
      });
    }

    const seo = await updateSEOService(req.body);

    return res.status(200).json({
      success: true,
      message: "SEO settings updated successfully.",
      data: seo,
    });
  } catch (error) {
    next(error);
  }
};