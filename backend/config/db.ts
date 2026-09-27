import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/safeweb';
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
      bufferCommands: false,
    });
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown database connection error';
    console.error(`[MongoDB] Connection error: ${message}`);
    throw new Error(`Database connection failed: ${message}`);
  }
};
