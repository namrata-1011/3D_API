import Joi from "joi";

export const createMediaValidation = Joi.object({
  title: Joi.string().trim().required(),

  mediaOutlet: Joi.string().trim().required(),

  format: Joi.string()
    .valid("Magazine Features", "Press Releases", "Podcasts")
    .optional(),

  date: Joi.date().optional(),

  url: Joi.string().trim().optional(),

  thumbnail: Joi.string().trim().required(),

  detailedExcerpt: Joi.string().trim().optional(),

  metrics: Joi.string().trim().optional(),

  isActive: Joi.boolean().optional(),
});