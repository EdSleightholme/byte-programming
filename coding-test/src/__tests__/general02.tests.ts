import { getTSVChecksum } from "../general02";
describe("general 02 tests", () => {
  test('returns 18 if given 02-generalTestFile2 file', () => {
    expect(getTSVChecksum('./test_file/02-generalTestFile2.tsv')).toBe(18);
  });
  test('returns 32121 if given 02-generalTestFile file', () => {
    expect(getTSVChecksum('./test_file/02-generalTestFile.tsv')).toBe(32121);
  });
  test('thows error if given non number chars', () => {
    expect(()=>{getTSVChecksum('./test_file/02-generalTestFile3.tsv')}).toThrowError('invalid char found in data given');
  });
});
