import React, { FC } from 'react';

import { ChatProvider } from './ChatContext';
import EnhancedChat from './EnhancedChat';
import FrequencyView from './FrequencyView';
import WordCloudView from './WordCloudView';

const App: FC = () => {
  // ha en liste med meldinger som gjentar seg.
  // ha et vindu med chat som har filterert bort gjentagende meldinger
  // ha et vindu som viser gjentagende meldinger
  // vindu for brukere som spammer vs skriver orginale/egne meldinger
  // ordsky for alle ord
  // sentiment analyse av chatten https://www.npmjs.com/package/@happyaccident/wink-sentiment
  // sentiment analyse av brukere, top 5, worst 5
  // bruk emotes istedet for plain text
  return (
    <ChatProvider channel={window.location.pathname.slice(1)}>
      <article className="app">
        <h1>Twitch Chat View</h1>
        <section className="window-grid">
          <WordCloudView />
          <FrequencyView />
          <EnhancedChat />
        </section>
      </article>
    </ChatProvider>
  );
};

export default App;
