'use client';

import { Conversation, User } from '@prisma/client';
import Link from 'next/link';
import { useMemo } from 'react';
import useOtherUser from '../../hooks/useOtherUser';
import { HiChevronLeft } from 'react-icons/hi';

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

export default function Header({ conversation }: HeaderProps) {
  const otherUser = useOtherUser(conversation);

  const statusText = useMemo(() => {
    // if is group convo, return number of members. Otherwise display online status
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return 'Active'; // hardcoded for now
  }, [conversation]);

  return (
    <div className='bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm '>
      <div className='flex gap-3 items-center'>
        <Link
          href='/conversations'
          className='lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer'
        >
          <HiChevronLeft size={26} />
        </Link>
      </div>
    </div>
  );
}
