jest.dontMock('./../../src/utils/Utils');

describe('../src/src/utils/Utils/GCD', () => {
  let sut;
  beforeEach(() => {
      sut = require('./../../src/utils/Utils').GCD;
  });

  describe('Given two non-zero values', () => {
    const value1 = 5;
    const value2 = 10;

    describe('When determining largest positive integer that divides 5 and 10 without a remainder.', () => {
      let actual;
      beforeEach(() => {
         actual = sut(value1, value2);
      });

      it('should equal 5', () => {
       expect(actual).toBe(5);
      });
   });
  });
});
