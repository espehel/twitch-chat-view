import React, { FC } from 'react';
import WordCloud from 'react-d3-cloud';
import { useChatState } from './ChatContext';

const WordCloudView: FC = () => {
  const { words } = useChatState();
  const cloudData = Array.from(words).map(([text, value]) => ({
    text,
    value,
  }));

  return (
    <article>
      <h2>Word Cloud</h2>
      {cloudData.length > 0 && (
        <WordCloud
          data={cloudData}
          fontSizeMapper={(word) => Math.log2(word.value) * 5}
          rotate={() => ((Math.random() * 90) % 90) - 45}
          padding={2}
          height={400}
          width={400}
        />
      )}
    </article>
  );
};

export default WordCloudView;
