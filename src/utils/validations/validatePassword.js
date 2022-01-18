import bcrypt from 'bcrypt';
import { findUserByIdentifier } from '../../frameworks/orm/mongoose/queries/subQueries.js';
import { userModel } from '../../frameworks/orm/mongoose/schemas/index.js';
import { ApiError } from '../../frameworks/middlewares/error/errorClass.js';
import { CREDENTIALS_DO_NOT_MATCH } from '../messages.js';

export const doPasswordsMatch = async (email, receivedPassword) => {
  try {
    const user = await findUserByIdentifier('email', email, userModel);
    const doPasswordsMatch = await bcrypt.compare(
      receivedPassword,
      user.password
    );
    if (doPasswordsMatch) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return { error: true, msg: CREDENTIALS_DO_NOT_MATCH };
  }
};
