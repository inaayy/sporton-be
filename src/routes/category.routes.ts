import { Router } from "express";
import {createCategory, getCategories, getCategoryById, updateCategory, deleteCategory} from "../controllers/category.controller";
import {upload} from "../middlewares/upload.middleware";
import { authenticate } from "../middlewares/auth.middelware";

const router = Router();

router.post("/", authenticate, upload.none(), createCategory);
router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.put("/:id", authenticate, upload.single("image"), updateCategory);
router.delete("/:id", authenticate, deleteCategory);

export default router;