import prisma from '../../app/lib/prismadb';
import getCurrentUser from './getCurrentUser';

const getConversations = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser?.id) {
    return [];
  }

  // query: top conversation will be newest messages
  // find all conversations including the current user
  // populate the users/ data inside each message
  try {
    const conversations = await prisma.conversation.findMany({
      orderBy: {
        lastMessageAt: 'desc',
      },
      where: {
        userIds: {
          has: currentUser.id,
        },
      },
      include: {
        users: true,
        messages: {
          include: {
            sender: true,
            seen: true,
          },
        },
      },
    });

    return conversations;
  } catch (error: any) {
    return [];
  }
};

export default getConversations;
