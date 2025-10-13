import mongoose from 'mongoose';

interface GlobalWithMongoose {
  mongoose?: CachedConnection;
}

interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Ensure we have a cached object
if (!(global as GlobalWithMongoose).mongoose) {
  (global as GlobalWithMongoose).mongoose = { conn: null, promise: null };
}

const cached = (global as GlobalWithMongoose).mongoose!;

async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGO_URI!);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDB;
