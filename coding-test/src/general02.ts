import { readFileSync } from "fs";
export const getTSVChecksum = (fileName: string) => {
  const file = readFileSync(fileName, "utf-8");
  return file.split("\n").reduce((total, rowOfData) => {
    let maxVal:null|number = null;
    let minVal:null|number = null;
    rowOfData.split("\t").map((currentChar) => {
      const currentValue = parseInt(currentChar);
      maxVal = maxVal ?? currentValue;
      minVal = minVal ?? currentValue;
      if (!currentValue) {
        throw new Error(`invalid char found in data given ${currentValue}`);
      }
      if (maxVal < currentValue) {
        maxVal = currentValue;
      }
      if (minVal > currentValue) {
        minVal = currentValue;
      }
      return currentValue;
    });
    return total + maxVal - minVal;
  }, 0);
};
