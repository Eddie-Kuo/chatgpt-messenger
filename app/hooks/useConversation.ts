import { useParams } from 'next/navigation';
import { useMemo } from 'react';

const useConversation = () => {
  const params = useParams();

  // search for conversations within params
  const conversationId = useMemo(() => {
    if (!params?.conversationId) {
      return '';
    }

    return params.conversationId as string;
  }, [params?.conversationId]);

  // "!!" turns data into a boolean: in this case, string => boolean
  const isOpen = useMemo(() => !!conversationId, [conversationId]);

  return useMemo(
    () => ({
      isOpen,
      conversationId,
    }),
    [isOpen, conversationId]
  );
};

// useMemo makes applications more efficient by storing computation results in cache then retrieves
// the same information when it's needed instead od computing again
