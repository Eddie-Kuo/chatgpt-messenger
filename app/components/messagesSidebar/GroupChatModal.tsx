'use client';

import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

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

  return <div>GroupChatModal</div>;
}
