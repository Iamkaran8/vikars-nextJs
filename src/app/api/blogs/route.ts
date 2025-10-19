import { NextRequest, NextResponse } from 'next/server';
import connectToDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

// GET all blogs
export async function GET() {
  try {
    await connectToDB();
    const blogs = await Blog.find().sort({ date: -1 });
    return NextResponse.json({ blogs, success: true }, { status: 200 });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json({ msg: errorMessage, success: false }, { status: 500 });
  }
}

// POST - Create new blog
export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const { title, description, image, date, category } = await req.json();

    // Validation
    if (!title || !description || !image || !date || !category) {
      return NextResponse.json(
        { msg: 'All fields are required', success: false },
        { status: 400 }
      );
    }

    const newBlog = new Blog({
      title,
      description,
      image,
      date: new Date(date),
      category,
    });

    await newBlog.save();

    return NextResponse.json(
      { msg: 'Blog created successfully', blog: newBlog, success: true },
      { status: 201 }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json({ msg: errorMessage, success: false }, { status: 500 });
  }
}
