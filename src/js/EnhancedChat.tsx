import React, { FC, useState } from 'react';
import { useChatState } from './ChatContext';

const EnhancedChat: FC = () => {
  const { messages, frequencyMap } = useChatState();
  const [filterChat, setFilterChat] = useState(false);

  const enhancedMessages = filterChat
    ? messages.filter((message) => {
        const frequency = frequencyMap.get(message);
        return frequency ? frequency < 5 : true;
      })
    : messages;

  return (
    <article>
      <h2>Enhanced Chat</h2>
      <section>
        <label htmlFor="filter-btn">Filter spam: </label>
        <button id="filter-btn" onClick={() => setFilterChat(!filterChat)}>
          {filterChat ? 'On' : 'Off'}
        </button>
      </section>
      {enhancedMessages.map((message, i) => (
        <p key={i}>{message}</p>
      ))}
    </article>
  );
};

export default EnhancedChat;
