import { getLoginController } from '../../../adapters/controllers/authentication/login.js';
import { logMiddleware } from '../../middlewares/log-middleware.js';
import { LoginMiddleware } from '../../middlewares/login/login-middleware.js';

export const loginRouter = express => {
  const router = express.Router();

  const loginController = getLoginController();
  router
    .route('/')
    .post(
      logMiddleware(`login at ${Date.now()}`),
      LoginMiddleware,
      loginController.login
    );

  return router;
};
