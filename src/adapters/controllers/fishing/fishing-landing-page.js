import {
  changeBooleanVal,
  findUserByIdentifier,
} from '../../../frameworks/orm/mongoose/queries/subQueries.js';
import userModel from '../../../frameworks/orm/mongoose/schemas/User.js';

const fishingLandingPageController = () => {
  const getFishedUserEmail = async (req, res, next) => {
    const { id } = req.query;
    try {
      await changeBooleanVal('fishing_id', id, true, userModel);

      res.send('Lots of interesting things about covid');
    } catch (e) {
      console.log('e is', e);
    }
  };
  return { getFishedUserEmail };
};
export default fishingLandingPageController;
