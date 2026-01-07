import { Router } from "express";

import {
  routerLogin,
  routerUpdate,
  routerSignup,
} from "../controllers/auth.controllers.js";

const router = Router();

router.post("/signup", routerSignup);
router.post("/login", routerLogin);
router.post("/update/:id", routerUpdate);

export default router;
