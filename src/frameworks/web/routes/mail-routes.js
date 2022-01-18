import sendEmailController from '../../../adapters/controllers/mailer/send-email.js';

export const mailRouter = express => {
  const router = express.Router();

  const mailController = sendEmailController();
  router.route('/').post(mailController.sendEmail);

  return router;
};
