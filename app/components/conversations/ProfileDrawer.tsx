'use client';

import { Conversation, User } from '@prisma/client';

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: Conversation & {
    users: User[];
  };
}

export default function ProfileDrawer({
  isOpen,
  onClose,
  data,
}: ProfileDrawerProps) {
  return <div>ProfileDrawer</div>;
}
