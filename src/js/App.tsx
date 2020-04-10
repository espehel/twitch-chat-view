import React, { FC } from 'react';

import { ChatProvider } from './ChatContext';
import ChatWindow from './ChatWindow';

const App: FC = () => {
  // ha en liste med meldinger som gjentar seg.
  // ha et vindu med chat som har filterert bort gjentagende meldinger
  // ha et vindu som viser gjentagende meldinger
  // vindu for brukere som spammer vs skriver orginale/egne meldinger
  // ordsky for alle ord
  return (
    <ChatProvider channel={window.location.pathname.slice(1)}>
      <article>
        <h2>Twitch Chat View</h2>
        <ChatWindow />
      </article>
    </ChatProvider>
  );
};

export default App;
