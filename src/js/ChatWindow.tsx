import React, { FC } from 'react';
import { useChatState } from './ChatContext';

const ChatWindow: FC = () => {
  const { messages } = useChatState();

  return (
    <section>
      {messages.map((message, i) => (
        <p key={i}>{message}</p>
      ))}
    </section>
  );
};

export default ChatWindow;
