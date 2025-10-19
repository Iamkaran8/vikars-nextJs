import { NextRequest, NextResponse } from 'next/server';
import connectToDB from '@/lib/mongodb';
import Category from '@/models/Category';

// PUT - Update category
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDB();
    const { id } = await params;
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json(
        { msg: 'Category name is required', success: false },
        { status: 400 }
      );
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name },
      { new: true, runValidators: true }
    );

    if (!updatedCategory) {
      return NextResponse.json(
        { msg: 'Category not found', success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { msg: 'Category updated successfully', category: updatedCategory, success: true },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json({ msg: errorMessage, success: false }, { status: 500 });
  }
}

// DELETE category
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDB();
    const { id } = await params;
    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return NextResponse.json(
        { msg: 'Category not found', success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { msg: 'Category deleted successfully', success: true },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json({ msg: errorMessage, success: false }, { status: 500 });
  }
}
