export const removeDuplicates = (array: any[]) => {
  const uniqueArray: Array<any> = [];
  for (let item of array) {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  }
  return uniqueArray;
};

export const sortByAlphabets = (args: string[]): string[] => {
  return [...args].sort((a, b) => a.localeCompare(b));
};
