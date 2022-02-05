const hashifyKey = (key) => {
  let hash = 0;
  let chr;
  for (let i = 0; i < key.length; i += 1) {
    chr = key.charCodeAt(i);
    hash = (hash << 5) - hash + chr; // eslint-disable-line no-bitwise
  }
  return hash;
};

export default hashifyKey;
