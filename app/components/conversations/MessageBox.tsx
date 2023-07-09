'use client';

import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { FullMessageType } from '../../types';

interface MessageBoxProps {
  isLast?: boolean;
  data: FullMessageType;
}

export default function MessageBox({ isLast, data }: MessageBoxProps) {
  const session = useSession();

  // validation of messages - our own? other user? has message been seen?
  const isOwnMessage = session?.data?.user?.email === data?.sender?.email;

  const seenList = (data.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(', ');

  return <div>MessageBox</div>;
}
