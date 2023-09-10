export const removeDuplicates = (arr: string[] | number[]) =>
  Array.from(new Set(arr as string[]));

export const sortByAlphabets = (args: string[]): string[] => {
  return [...args].sort((a, b) => a.localeCompare(b));
};
