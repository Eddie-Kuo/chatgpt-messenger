'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import useOtherUser from '../../hooks/useOtherUser';
import { FullConversationType } from '../../types';

interface ConversationBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

export default function ConversationBox({
  data,
  selected,
}: ConversationBoxProps) {
  // hook to select the other user in the conversation
  const otherUser = useOtherUser(data);
  const session = useSession();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/conversations/${data.id}`);
  }, [data.id, router]);

  // fetch the last message
  const lastMessage = useMemo(() => {
    const messages = data.messages || [];
    return messages[messages.length - 1];
  }, [data.messages]);

  // fetch user email
  const userEmail = useMemo(() => {
    return session?.data?.user?.email;
  }, [session?.data?.user?.email]);

  // has user seen the message?
  const hasSeen = useMemo(() => {
    // is there a last message
    if (!lastMessage) {
      return false;
    }

    const seenArray = lastMessage.seen || [];

    if (!userEmail) {
      return false;
    }

    return seenArray.filter((user) => user.email === userEmail).length !== 0;
  }, [userEmail, lastMessage]);

  // last message text
  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return 'Sent an Image';
    }

    if (lastMessage?.body) {
      return lastMessage.body;
    }

    return 'Started a Conversation';
  }, [lastMessage]);

  return <div>Conversation Box</div>;
}
