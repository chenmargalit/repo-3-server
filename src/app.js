import express from 'express';
import expressConfig from './frameworks/web/express.js';
import serverConfig from './frameworks/web/server.js';
import errorMiddleware from './frameworks/middlewares/error/error-middleware.js';
import routes from './frameworks/web/routes/index.js';
import config from './config/config.js';
import { Mongo } from './frameworks/orm/mongoose/index.js';

const app = express();

expressConfig(app);

serverConfig(app, config).startServer();

const mongo = new Mongo();
mongo.connect();

routes(app, express);

app.use(errorMiddleware);

export default app;
