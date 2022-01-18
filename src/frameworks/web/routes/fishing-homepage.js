import fishingLandingPageController from '../../../adapters/controllers/fishing/fishing-landing-page.js';

export const fishingRouter = express => {
  const router = express.Router();

  const fishingController = fishingLandingPageController();
  router.route('/').get(fishingController.getFishedUserEmail);

  return router;
};
