'use client';

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

  return <div>Conversation Box</div>;
}
