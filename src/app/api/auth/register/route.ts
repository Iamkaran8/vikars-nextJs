import { NextRequest, NextResponse } from 'next/server';
import connectToDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

export async function POST(req: NextRequest) {
    try {
        await connectToDB();
        const { email, password } = await req.json() as { email: string; password: string };

        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) return NextResponse.json({ msg: 'Admin already exists' }, { status: 400 });

        const admin = new Admin({ email, password });
        await admin.save();

        return NextResponse.json({ msg: 'Admin registered successfully' }, { status: 201 });
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        return NextResponse.json({ msg: errorMessage }, { status: 500 });
    }
}
