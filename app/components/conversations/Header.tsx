'use client';

import { Conversation, User } from '@prisma/client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { HiChevronLeft } from 'react-icons/hi';
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import useActiveList from '../../hooks/useActiveList';
import useOtherUser from '../../hooks/useOtherUser';
import Avatar from '../Avatar';
import GroupedAvatar from '../GroupedAvatar';
import ProfileDrawer from './ProfileDrawer';

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

export default function Header({ conversation }: HeaderProps) {
  const otherUser = useOtherUser(conversation);
  const [openDrawer, setOpenDrawer] = useState(false);
  const { members } = useActiveList();
  const isActive = members.indexOf(otherUser?.email!) !== -1;

  const statusText = useMemo(() => {
    // if is group convo, return number of members. Otherwise display online status
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return isActive ? 'Active' : 'Offline';
  }, [conversation, isActive]);

  return (
    <>
      <ProfileDrawer
        data={conversation}
        isOpen={openDrawer}
        onClose={() => setOpenDrawer(false)}
      />
      <div className='bg-white w-full flex border-b-[1px] sm:px-4 py-2 px-4 lg:px-3 justify-between items-center shadow-sm '>
        <div className='flex gap-3 items-center'>
          <Link
            href='/conversations'
            className='lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer'
          >
            <HiChevronLeft size={26} />
          </Link>
          {conversation.isGroup ? (
            <GroupedAvatar users={conversation.users} />
          ) : (
            <Avatar user={otherUser} />
          )}

          <div className='flex flex-col'>
            <div>{conversation.name || otherUser.name}</div>
            <div className='text-sm font-light text-neutral-500'>
              {statusText}
            </div>
          </div>
        </div>
        <HiEllipsisHorizontal
          size={28}
          onClick={() => setOpenDrawer(true)}
          className='text-sky-500 cursor-pointer hover:text-sky-600 transition'
        />
      </div>
    </>
  );
}
