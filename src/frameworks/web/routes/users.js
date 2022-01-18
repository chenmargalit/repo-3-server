import getUsersController from '../../../adapters/controllers/users/get-users.js';

export const usersRouter = express => {
  const router = express.Router();

  const usersController = getUsersController();
  router.route('/').get(usersController.getUsers);

  return router;
};
