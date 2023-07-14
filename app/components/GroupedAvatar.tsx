'use client';

import { User } from '@prisma/client';
import Image from 'next/image';

interface GroupedAvatarProps {
  users?: User[];
}

export default function GroupedAvatar({ users = [] }: GroupedAvatarProps) {
  const slicedUsers = users.slice(0, 3);
  const avatarPositioning = {
    0: 'top-0 left-[8px]',
    1: 'bottom-0 right-0',
    2: 'bottom-0',
  };

  return (
    <div className='relative h-12 w-12'>
      {slicedUsers.map((user, index) => (
        <div
          key={user.id}
          className={`absolute inline-block rounded-full overflow-hidden h-[30px] w-[30px] border border-white  ${
            avatarPositioning[index as keyof typeof avatarPositioning]
          }`}
        >
          <Image
            fill
            src={user?.image || '/images/placeholder.jpg'}
            alt='Avatar'
          />
        </div>
      ))}
    </div>
  );
}
