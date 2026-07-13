import express from "express";
import adminRoutes from "../modules/admin/admin.routes.js";
import founderJourneyRoutes from "../modules/founderJourney/founderJourney.routes.js";
import activityLogRoutes from "../modules/activityLog/activityLog.routes.js";
import homepageRoutes from "../modules/homepage/homepage.routes.js";
import aboutRoutes from "../modules/about/about.routes.js";
import collaborationRoutes from "../modules/collabration/collaboration.routes.js";
import { campaignRoutes, launchRoutes } from "../modules/campaign/campaigns.routes.js";
import eventsRoutes from "../modules/events/events.routes.js";
import whatWeDoRoutes from "../modules/whatWeDo/whatWeDo.routes.js";
import servicesRoutes from "../modules/services/services.routes.js";
import MissionVisionRoutes from "../modules/missionVision/missionVision.routes.js";

const router = express.Router();

router.use("/admin", adminRoutes);
router.use("/founder-journey", founderJourneyRoutes);
router.use("/logs", activityLogRoutes);
router.use("/homepage", homepageRoutes);
router.use("/about", aboutRoutes);
router.use("/collaboration", collaborationRoutes);
router.use("/campaigns", campaignRoutes);
router.use("/launches", launchRoutes);
router.use("/events",eventsRoutes);
router.use("/what-we-do", whatWeDoRoutes);
router.use("/services", servicesRoutes);
router.use("/mission-vision", MissionVisionRoutes);

export default router;