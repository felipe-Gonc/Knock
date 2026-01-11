import { Router } from "express";

import {
  routerLogin,
  routerUpdate,
  routerSignup,
  deleteUser,
  getUserByID,
} from "../controllers/auth.controllers.js";

const router = Router();

router.post("/signup", routerSignup);
router.post("/login", routerLogin);
router.put("/update/:id", routerUpdate);
router.get("/user/:id", getUserByID);
router.delete("/delete/:id", deleteUser);

export default router;
