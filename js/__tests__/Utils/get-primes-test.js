jest.dontMock('./../../src/problems/utils/Prime');
jest.dontMock('./../../src/problems/utils/Utils');

describe('../src/src/problems/utils/Prime/getPrimes', () => {
  let sut;
  beforeEach(() => {
      sut = require('./../../src/problems/utils/Prime').getPrimes;
  });

  describe('Given positive, composite integer 10', () => {
    const value = 10;

    describe('When getting a list of prime factors of 10', () => {
      let actual;
      beforeEach(() => {
         actual = sut(value);
      });

      it('should equal [2,5]', () => {
        expect(actual).toEqual([2,5]);
      });
   });
  });

  describe('Given positive, prime integer 11', () => {
    const value = 11;

    describe('When getting a list of prime factors of 11', () => {
      let actual;
      beforeEach(() => {
         actual = sut(value);
      });

      it('should equal [11]', () => {
        expect(actual).toEqual([11]);
      });
   });
 });
});
