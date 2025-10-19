import mongoose, { Document, Model } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  description: string;
  image: string;
  date: Date;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new mongoose.Schema<IBlog>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: Date, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
export default Blog;
