import prisma from '../../app/lib/prismadb';
import getSession from './getSession';

// action to retrieve list of all users who use our app
const getUsers = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    // fetch all users except our own account - cant start a conversation with ourselves
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    });

    return users;
  } catch (error: any) {
    return [];
  }
};

export default getUsers;
