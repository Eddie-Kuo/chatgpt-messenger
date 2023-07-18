'use client';

import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import useConversation from '../../hooks/useConversation';
import { pusherClient } from '../../lib/pusher';
import { FullMessageType } from '../../types';
import MessageBox from './MessageBox';

interface BodyProps {
  initialMessages: FullMessageType[];
}

export default function Body({ initialMessages }: BodyProps) {
  const [messages, setMessages] = useState(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { conversationId } = useConversation();

  // post route to mark conversation as seen when user clicks into conversation
  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);

  // subscribe to pusher
  useEffect(() => {
    pusherClient.subscribe(conversationId);

    // auto scroll to latest message
    bottomRef?.current?.scrollIntoView();

    // bind pusher client handler
    pusherClient.bind('messages:new', () => {});

    // unbind + unmount to prevent overflow
    return () => {
      pusherClient.unsubscribe(conversationId);
      pusherClient.unbind('messages:new');
    };
  }, [conversationId]);

  return (
    <div className='flex-1 overflow-y-auto'>
      {messages.map((message, i) => (
        <MessageBox
          isLast={i === messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}

      <div ref={bottomRef} className='pt-24' />
    </div>
  );
}
