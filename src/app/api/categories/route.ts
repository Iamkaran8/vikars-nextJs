import { NextRequest, NextResponse } from 'next/server';
import connectToDB from '@/lib/mongodb';
import Category from '@/models/Category';

// GET all categories
export async function GET() {
  try {
    await connectToDB();
    const categories = await Category.find().sort({ name: 1 });
    return NextResponse.json({ categories, success: true }, { status: 200 });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json({ msg: errorMessage, success: false }, { status: 500 });
  }
}

// POST - Create new category
export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const { name } = await req.json();

    // Validation
    if (!name) {
      return NextResponse.json(
        { msg: 'Category name is required', success: false },
        { status: 400 }
      );
    }

    // Check if category already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return NextResponse.json(
        { msg: 'Category already exists', success: false },
        { status: 400 }
      );
    }

    const newCategory = new Category({ name });
    await newCategory.save();

    return NextResponse.json(
      { msg: 'Category created successfully', category: newCategory, success: true },
      { status: 201 }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json({ msg: errorMessage, success: false }, { status: 500 });
  }
}
