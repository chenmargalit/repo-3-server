// import bodyParser from 'body-parser';
// import cors from 'cors';
// import { routes } from '../web/routes';
// import { logMiddleware } from './log-middleware';
// import cookieParser from 'cookie-parser';

// export const attachMiddlewares = (app, db) => {
//   app.use(cookieParser());

//   app.use(bodyParser.json({ limit: '50mb' }));
//   app.use(bodyParser.urlencoded({ extended: true }));
//   app.use(cors());

//   app.use(routes(app, db));

//   app.use(logMiddleware);
// };
