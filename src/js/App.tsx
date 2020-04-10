import React, { FC } from 'react';

import { useOpenChat } from './twitch';

const App: FC = () => {
  const messages = useOpenChat(window.location.pathname.slice(1));
  return (
    <article>
      <h2>Twitch Chat View</h2>
      <section>
        {messages.map((message) => (
          <p key={message}>{message}</p>
        ))}
      </section>
    </article>
  );
};

export default App;
