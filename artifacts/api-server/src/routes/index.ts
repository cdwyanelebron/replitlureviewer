import { Router, type IRouter } from "express";
import healthRouter from "./health";
import cCompilerRouter from "./cCompiler";

const router: IRouter = Router();

router.use(healthRouter);
router.use(cCompilerRouter);

export default router;
