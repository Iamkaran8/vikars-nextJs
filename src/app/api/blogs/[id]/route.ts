import { NextRequest, NextResponse } from 'next/server';
import connectToDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

// GET single blog by ID
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDB();
    const { id } = await params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json({ msg: 'Blog not found', success: false }, { status: 404 });
    }

    return NextResponse.json({ blog, success: true }, { status: 200 });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json({ msg: errorMessage, success: false }, { status: 500 });
  }
}

// PUT - Update blog
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDB();
    const { id } = await params;
    const { title, description, image, date, category } = await req.json();

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        title,
        description,
        image,
        date: new Date(date),
        category,
      },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return NextResponse.json({ msg: 'Blog not found', success: false }, { status: 404 });
    }

    return NextResponse.json(
      { msg: 'Blog updated successfully', blog: updatedBlog, success: true },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json({ msg: errorMessage, success: false }, { status: 500 });
  }
}

// DELETE blog
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDB();
    const { id } = await params;
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json({ msg: 'Blog not found', success: false }, { status: 404 });
    }

    return NextResponse.json(
      { msg: 'Blog deleted successfully', success: true },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json({ msg: errorMessage, success: false }, { status: 500 });
  }
}
