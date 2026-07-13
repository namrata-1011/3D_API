import express from "express";
import whatWeDoController from "./whatWeDo.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";
import upload from "../../middleware/upload.middleware.js";
import {
  validateHero,
  validateOperationsCreate,
  validateOperationsUpdate,
  validateServicesCreate,
  validateServicesUpdate,
  validateQuote,
  validateSeo,
  validateSectionSettings,
  validateId,
} from "./whatWeDo.validation.js";

const router = express.Router();

const validate = (schema)=>(req,res,next)=>{
  const {error}=schema.validate(req.body,{abortEarly:false});
  if(error){
    return res.status(400).json({
      success:false,
      message:"Validation Error",
      errors:error.details.map(err=>({
        field:err.path.join("."),
        message:err.message
      }))
    });
  }
  next();
};

const validateParams=(schema)=>(req,res,next)=>{
  const {error}=schema.validate(req.params);
  if(error){
    return res.status(400).json({
      success:false,
      message:"Validation Error"
    });
  }
  next();
};

const mapFileToBody=(fieldName)=>(req,res,next)=>{
  if(req.file){
    req.body[fieldName]=req.file.originalname || "uploaded";
  }
  next();
};

// Root
router.get("/",whatWeDoController.get);
router.post("/",authMiddleware,whatWeDoController.create);

// Hero
router.get("/hero",whatWeDoController.get);
router.put("/hero",authMiddleware,validate(validateHero),whatWeDoController.updateHero);

// Operations
router.get("/operations",whatWeDoController.getAllOperations);
router.get("/operations/:id",validateParams(validateId),whatWeDoController.getOperationById);

router.post("/operations",
  authMiddleware,
  validate(validateOperationsCreate),
  whatWeDoController.createOperation
);

router.put("/operations/:id",
  authMiddleware,
  validateParams(validateId),
  validate(validateOperationsUpdate),
  whatWeDoController.updateOperation
);

router.delete("/operations/:id",
  authMiddleware,
  validateParams(validateId),
  whatWeDoController.deleteOperation
);

router.patch("/operations/:id/toggle",
  authMiddleware,
  validateParams(validateId),
  whatWeDoController.toggleOperationStatus
);

router.patch("/operations/reorder",
  authMiddleware,
  whatWeDoController.reorderOperations
);

// Services
router.get("/services",whatWeDoController.getAllServices);
router.get("/services/:id",validateParams(validateId),whatWeDoController.getServiceById);

router.post("/services",
  authMiddleware,
  validate(validateServicesCreate),
  whatWeDoController.createService
);

router.put("/services/:id",
  authMiddleware,
  validateParams(validateId),
  validate(validateServicesUpdate),
  whatWeDoController.updateService
);

router.delete("/services/:id",
  authMiddleware,
  validateParams(validateId),
  whatWeDoController.deleteService
);

router.patch("/services/:id/toggle",
  authMiddleware,
  validateParams(validateId),
  whatWeDoController.toggleServiceStatus
);

router.patch("/services/reorder",
  authMiddleware,
  whatWeDoController.reorderServices
);

// Quote Banner
router.get("/quote-banner",whatWeDoController.getQuoteBanner);

router.put("/quote-banner",
  authMiddleware,
  validate(validateQuote),
  whatWeDoController.updateQuoteBanner
);

// SEO
router.get("/seo",whatWeDoController.getSeo);

router.put("/seo",
  authMiddleware,
  upload.single("ogImageUrl"),
  mapFileToBody("ogImageUrl"),
  validate(validateSeo),
  whatWeDoController.updateSeo
);

// Section Settings
router.get("/section-settings",whatWeDoController.getSectionSettings);

router.put("/section-settings",
  authMiddleware,
  validate(validateSectionSettings),
  whatWeDoController.updateSectionSettings
);

// Draft & Publish
router.put("/publish",
  authMiddleware,
  whatWeDoController.publish
);

router.put("/draft",
  authMiddleware,
  whatWeDoController.saveDraft
);

export default router;