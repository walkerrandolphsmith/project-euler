jest.dontMock('./../../src/010/sum-of-primes');
jest.dontMock('./../../src/utils/Prime');

describe('../src/src/010/sum-of-primes', () => {
  let sut;
  beforeEach(() => {
      sut = require('./../../src/010/sum-of-primes');
  });

  describe('Given value 10', () => {
    var value = 10;

    describe('When determining the sum of primes less than the given value', () => {
      let actual;
      beforeEach(() => {
         actual = sut.sumOfPrimesBelow(value);
      });

      it('should equal 17', () => {
       expect(actual).toBe(17);
      });
    });
  });
});
