jest.dontMock('./../../src/utils/Prime');
jest.dontMock('./../../src/utils/Utils');

describe('../src/src/utils/Prime/isPrime', () => {
  let sut;
  beforeEach(() => {
      sut = require('./../../src/utils/Prime').isPrime;
  });

  describe('Given positive, composite integer 10', () => {
    const value = 10;

    describe('When getting a list of prime factors of 10', () => {
      let actual;
      beforeEach(() => {
         actual = sut(value);
      });

      it('should equal false', () => {
        expect(actual).toBe(false);
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

      it('should equal true', () => {
        expect(actual).toEqual(true);
      });
   });
 });
});
