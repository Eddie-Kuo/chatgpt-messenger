import bcrypt from 'bcrypt';

import prisma from '../../lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    if (!email || !name || !password) {
      return new NextResponse('Missing Information', { status: 400 });
    }

    // passwords are not to be stored in original form/ plain text. Arguments(data, saltRounds)
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log('Registration Error', error);
    return new NextResponse('Registration Error', { status: 500 });
  }
}
