import mongoose, { Document, Model } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new mongoose.Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Category: Model<ICategory> = mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);
export default Category;
