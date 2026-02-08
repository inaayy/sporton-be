import { Router } from "express";
import { signin, initiateAdmin } from "../controllers/auth.controller";
import { upload } from "../middlewares/upload.middleware";

const router = Router();

router.post("/signin", signin);
router.post("/initiate-admin-user", initiateAdmin);

export default router;