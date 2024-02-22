import mongoose from 'mongoose';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI as string);
    console.log('MongoDB Connected 🚀');
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error connecting to MongoDB', error.message);
    } else {
      console.log('Error conecting to MongoDB', error);
      throw error;
    }
  }
};

export default connectToMongoDB;
