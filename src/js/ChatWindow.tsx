import React, { FC } from 'react';
import { useChatState } from './ChatContext';

const ChatWindow: FC = () => {
  const { messages } = useChatState();

  return (
    <article>
      <h2>Chat Window</h2>
      {messages.map((message, i) => (
        <p key={i}>{message}</p>
      ))}
    </article>
  );
};

export default ChatWindow;
