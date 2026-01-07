import { Router } from "express";

import {
  routerLogin,
  routerLogout,
  routerSignup,
} from "../controllers/auth.controllers.js";

const router = Router();

router.post("/signup", routerSignup);
router.post("/login", routerLogin);
router.post("/logout", routerLogout);

export default router;
