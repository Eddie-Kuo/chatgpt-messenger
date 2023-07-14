'use client';

import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Modal from '../Modal';
import Input from '../ui/Input';
import Select from '../ui/Select';

interface GroupChatModalProps {
  isOpen?: boolean;
  onClose: () => void;
  users: User[];
}

export default function GroupChatModal({
  isOpen,
  onClose,
  users,
}: GroupChatModalProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      members: [],
    },
  });

  const members = watch('members');

  const onSubmit: SubmitHandler<FieldValues> = () => {
    setIsLoading(true);

    // axios post
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-10'>
          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-5 text-gray-900'>
              Create a Group Chat
            </h2>
            <p className='mt-1 text-sm leading-5 text-gray-600'>
              Group chats must be with more than 2 people.
            </p>
            <div className='mt-5 flex flex-col gap-y-8'>
              <Input
                disabled={isLoading}
                label='Name'
                id='name'
                errors={errors}
                required
                register={register}
              />
              <Select />
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
}
