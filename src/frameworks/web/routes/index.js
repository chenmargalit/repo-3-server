import { fishingRouter } from './fishing-homepage.js';
import { loginRouter } from './login-routes.js';
import { mailRouter } from './mail-routes.js';
import { usersRouter } from './users.js';

export const routes = (app, express) => {
  app.use('/api/v1/login', loginRouter(express));
  app.use('/api/v1/send-email', mailRouter(express));
  app.use('/api/v1/covid-info', fishingRouter(express));
  app.use('/api/v1/users', usersRouter(express));
};

export default routes;
