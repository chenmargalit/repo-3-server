import { reutrnAllUsers } from '../../../frameworks/orm/mongoose/queries/subQueries.js';
import userModel from '../../../frameworks/orm/mongoose/schemas/User.js';

const getUsersController = () => {
  const getUsers = async (req, res, next) => {
    const allUsers = await reutrnAllUsers();
    res.send(allUsers);
  };

  return { getUsers };
};

export default getUsersController;
