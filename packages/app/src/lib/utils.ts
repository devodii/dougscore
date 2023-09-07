export const removeDuplicates = (array: any[]) => {
  const uniqueArray: Array<any> = [];
  for (let item of array) {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  }
  return uniqueArray;
};
