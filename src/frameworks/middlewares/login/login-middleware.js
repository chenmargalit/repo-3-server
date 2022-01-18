import { ApiError } from '../error/errorClass.js';
import { doPasswordsMatch } from '../../../utils/validations/validatePassword.js';
import { CREDENTIALS_DO_NOT_MATCH } from '../../../utils/messages.js';

export const LoginMiddleware = async (req, res, next) => {
  try {
  } catch (e) {
    console.log('error in login');
    next(ApiError.badRequest);
  }
  const { loginToken } = req.cookies;
  const { email, password } = req.body;

  if (loginToken) {
    // check it
  } else {
    const passwordsMatch = await doPasswordsMatch(email, password);
    if (passwordsMatch === true) {
      // generate jwt token and send to client

      next();
    } else {
      next(ApiError.unAuthorized(CREDENTIALS_DO_NOT_MATCH));
    }
  }
};
