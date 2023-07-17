'use client';

import { User } from '@prisma/client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import Avatar from '../Avatar';
import LoadingModal from '../LoadingModal';

interface UserBlockProps {
  data: User;
}

export default function UserBlock({ data }: UserBlockProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = useCallback(() => {
    setIsLoading(true);

    axios
      .post('/api/conversations', {
        userId: data.id,
      })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data, router]);

  return (
    <>
      <LoadingModal />
      <div
        onClick={handleClick}
        className='relative w-full flex items-center space-x-3 bg-white p-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer'
      >
        <Avatar user={data} />
        <div className='min-w-0 flex-1'>
          <div className='focus:outline-none'>
            <div className='flex justify-between items-center mb-1'>
              <p className='text-sm font-medium text-gray-900'>{data.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
