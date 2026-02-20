import {Router} from "express";
import {authenticate} from "../middlewares/auth.middelware";
import { upload } from "../middlewares/upload.middleware";
import { createTransaction, getTransaction, getTransactionById, updateTransaction } from "../controllers/transaction.controller";

const router = Router();

router.post("/checkout", upload.single("image"), createTransaction);
router.get("/", authenticate, getTransaction);
router.get("/:id", getTransactionById);
router.patch("/:id", authenticate, updateTransaction);    

export default router;