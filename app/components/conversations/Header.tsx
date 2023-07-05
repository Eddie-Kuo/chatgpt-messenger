'use client';

import { Conversation, User } from '@prisma/client';

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

export default function Header({ conversation }: HeaderProps) {
  return <div>Header</div>;
}
