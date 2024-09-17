import mongoose from 'mongoose';
import { env } from './env.js';
import { MONGO_DB_VARS } from '../constants/index.js';

export const initMongoDB = async () => {
  try {
    const user = env(MONGO_DB_VARS.MONGO_USER);
    const password = env(MONGO_DB_VARS.MONGO_PASSWORD);
    const url = env(MONGO_DB_VARS.MONGO_URL);
    const db = env(MONGO_DB_VARS.MONGO_DB);

    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`,
    );

    console.log('MongoDB connection successfuly');
  } catch (error) {
    console.log('Error while connection to MongoDB', error);
    throw error;
  }
};
