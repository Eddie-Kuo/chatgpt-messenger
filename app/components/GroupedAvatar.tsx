'use client';

import { User } from '@prisma/client';

interface GroupedAvatarProps {
  users?: User[];
}

export default function GroupedAvatar({ users = [] }: GroupedAvatarProps) {
  return <div>GroupedAvatar</div>;
}
