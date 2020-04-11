export const updateFrequencies = (
  map: Map<string, number>,
  strings: Array<string>
): Map<string, number> => {
  const nextMap = new Map(map);
  strings.forEach((message) => {
    const frequency = nextMap.get(message);
    if (frequency !== undefined) {
      nextMap.set(message, frequency + 1);
    } else {
      nextMap.set(message, 1);
    }
  });
  return nextMap;
};
