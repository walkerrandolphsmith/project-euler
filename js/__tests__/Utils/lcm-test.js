jest.dontMock('./../../src/problems/utils/Utils');

describe('../src/src/problems/utils/Utils/LCM', () => {
  let sut;
  beforeEach(() => {
      sut = require('./../../src/problems/utils/Utils').LCM;
  });

  describe('Given two non-zero values', () => {
    const value1 = 4;
    const value2 = 10;

    describe('When determining the smallest positive integer divisble by 4 and 10.', () => {
      let actual;
      beforeEach(() => {
         actual = sut(value1, value2);
      });

      it('should equal 20', () => {
       expect(actual).toBe(20);
      });
   });
  });

  describe('Given the same non-zero values', () => {
    const value1 = 5;
    const value2 = 5;

    describe('When determining the smallest positive integer divisble by 5 and 5.', () => {
      let actual;
      beforeEach(() => {
         actual = sut(value1, value2);
      });

      it('should equal itself', () => {
       expect(actual).toBe(5);
      });
   });
  });
});
