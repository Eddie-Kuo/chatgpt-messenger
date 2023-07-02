import getCurrentUser from '../../actions/getCurrentUser';
import { NextResponse } from 'next/server';
import prisma from '../../../app/lib/prismadb';

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();

    //destructure body values for single and group chats
    const { userId, isGroup, members, name } = body;

    // check if there is a current user
    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // is group true but have not sent members or set group name
    if (isGroup && (!members || members.length < 2 || !name)) {
      return new NextResponse('Invalid Data', { status: 400 });
    }

    // create a group chat
    // since we are excluding out our own id from the users list, we must separately add it into the group chat
    if (isGroup) {
      const newConversation = await prisma.conversation.create({
        data: {
          name,
          isGroup,
          users: {
            connect: [
              ...members.map((member: { value: string }) => ({
                id: member.value,
              })),
              {
                id: currentUser.id,
              },
            ],
          },
        },
        // populates users when we create a new conversation - by default only the id is returned
        // populating the user gives us the names, photos, and all other data
        include: {
          users: true,
        },
      });

      return NextResponse.json(newConversation);
    }
  } catch (error: any) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
