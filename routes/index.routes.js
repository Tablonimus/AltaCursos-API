import { Router } from "express";
import { getUserInfo } from "../controllers/users.controller.js";
import { getAll, getCss, getFundamentos, getJavascript } from "../controllers/courses.controller.js";

const router = Router();

router.get("/users/me", getUserInfo);
router.get("/courses", getAll);
router.get("/courses/fundamentos-de-desarrollo-web", getFundamentos);
router.get("/courses/css-avanzado", getCss);
router.get("/courses/javascript", getJavascript);

export default router;
