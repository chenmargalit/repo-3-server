import { LOGGED_IN_SUCCESSFULLY } from '../../../utils/messages.js';

export const getLoginController = data => {
  const login = async (req, res, next) => {
    res.status(200).send(LOGGED_IN_SUCCESSFULLY);
  };
  return { login };
};
