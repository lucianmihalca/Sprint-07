import express from 'express';
import { getUserForSidebar } from '../controllers/user.controller';

import protectRoute from '../middleware/protectRoute';

const router = express.Router();

router.get('/', protectRoute, getUserForSidebar);

export default router;
