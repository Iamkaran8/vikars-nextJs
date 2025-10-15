import { NextRequest, NextResponse } from 'next/server';
import connectToDB from '@/lib/mongodb';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
    try {
        await connectToDB();
        const { email, password } = await req.json() as { email: string; password: string };

        const admin = await Admin.findOne({ email });
        if (!admin) return NextResponse.json({ msg: 'Invalid credentials' }, { status: 400 });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return NextResponse.json({ msg: 'Invalid credentials' }, { status: 400 });

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET!, { expiresIn: '1d' });

        return NextResponse.json({ token, email: admin.email, msg: "Login Success", type: "Admin" });
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        return NextResponse.json({ msg: errorMessage }, { status: 500 });
    }
}
