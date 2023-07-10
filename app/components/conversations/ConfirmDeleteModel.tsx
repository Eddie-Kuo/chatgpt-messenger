'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import useConversation from '../../hooks/useConversation';
import Modal from '../Modal';

interface ConfirmDeleteModelProps {
  isOpen?: boolean;
  onClose: () => void;
}

export default function ConfirmDeleteModel({
  isOpen,
  onClose,
}: ConfirmDeleteModelProps) {
  const router = useRouter();
  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = useState(false);

  const onDelete = useCallback(() => {
    // loading state
    // axios route
    // close conversation
    // set loading state back to false
  }, []);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='sm:flex sm:items-start'></div>
    </Modal>
  );
}
