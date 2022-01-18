import { getLoginController } from '../../../adapters/controllers/authentication/login.js';
import { LoginMiddleware } from '../../middlewares/login/login-middleware.js';

export const loginRouter = express => {
  const router = express.Router();

  const loginController = getLoginController();
  router
    .route('/')
    .post(
      LoginMiddleware,
      loginController.login
    );

  return router;
};
