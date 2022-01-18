import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  fished: Boolean,
  fishing_id: Number,
});

// module.exports = mongoose.model('User', userSchema);

const userModel = mongoose.model('User', userSchema);
export default userModel;
