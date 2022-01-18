import userModel from '../schemas/User.js';

const findUserByIdentifier = (identifier, value, schema) => {
  return schema.findOne({ [identifier]: value });
};

const changeBooleanVal = (identifier, value, bool, schema) => {
  return schema.updateOne({ [identifier]: value }, { $set: { fished: true } });
};

const reutrnAllUsers = () => {
  return userModel.find();
};

export { findUserByIdentifier, changeBooleanVal, reutrnAllUsers };
