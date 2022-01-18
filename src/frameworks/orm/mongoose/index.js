import mongoose from 'mongoose';

const localMongoURI = 'mongodb://localhost:27017/cymulate';

export class Mongo {
  async connect() {
    try {
      await mongoose.connect(localMongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('mongo connected successfully');
    } catch (err) {
      console.error('error connecting to mongo', err);
    }
  }
}

mongoose.set('bufferCommands', false);
