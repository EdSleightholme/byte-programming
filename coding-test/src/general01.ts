export const getChecksum = (rawData: string) => {
  const arrayOfChar = rawData.split("");
  return arrayOfChar.reduce((total, currentChar, index) => {
    const valueAtPosition = parseInt(currentChar);
    if (!valueAtPosition){
        throw new Error(`invalid char found in data given ${currentChar}`);
    }
    const valueAtNextPosition =
      index === arrayOfChar.length-1
        ? parseInt(arrayOfChar[0])
        : parseInt(arrayOfChar[index + 1]);
    return valueAtPosition &&
      valueAtNextPosition &&
      valueAtPosition === valueAtNextPosition
      ? valueAtPosition + total
      : total;
  }, 0);
};
