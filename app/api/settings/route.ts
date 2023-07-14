import { NextResponse } from 'next/server';
import getCurrentUser from '../../actions/getCurrentUser';
import prisma from '../../lib/prismadb';

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { name, image } = body;

    if (!currentUser?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name: name,
        image: image,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error: any) {
    console.log('ERROR_WITH_PROFILE_SETTINGS', error);
    return new NextResponse('Internal Error: Profile Settings', {
      status: 500,
    });
  }
}
