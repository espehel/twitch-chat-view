import React from 'react';
import { useChatState } from './ChatContext';

const FrequencyView = () => {
  const { frequencyMap } = useChatState();

  return (
    <article>
      <h2>Reoccuring messages</h2>
      {Array.from(frequencyMap)
        .sort(([, a], [, b]) => b - a)
        .filter(([, occurences]) => occurences > 1)
        .map(([message, occurences]) => (
          <p key={message}>{`${message}: ${occurences}`}</p>
        ))}
    </article>
  );
};

export default FrequencyView;
