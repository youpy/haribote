export const hello = (who: string): Promise<string> => {
  return Promise.resolve(`hello ${who}!`);
};
