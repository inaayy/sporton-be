import { Router } from "express";
import { signin, initiateAdmin } from "../controllers/auth.controller";
import { upload } from "../middlewares/upload.middleware";

const router = Router();

router.post("/signin", upload.none(), signin);
router.post("/initiate-admin-user", initiateAdmin);

export default router;