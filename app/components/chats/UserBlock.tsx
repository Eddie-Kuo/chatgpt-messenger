'use client';

import { User } from '@prisma/client';
import { useState } from 'react';

interface UserBlockProps {
  data: User;
}

export default function UserBlock({ data }: UserBlockProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <div
      onClick={handleClick}
      className='relative w-full flex items-center space-x-3 bg-white p-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer'
    >
      User
    </div>
  );
}
