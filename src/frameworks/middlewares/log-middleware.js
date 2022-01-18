export const logMiddleware =
  (data = 'default') =>
  (req, res, next) => {
    console.log('log middleware:', data);
    next();
  };
