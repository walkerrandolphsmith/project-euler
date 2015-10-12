jest.dontMock('./../../src/003/largest-prime-factor');
jest.dontMock('./../../src/utils/Utils');

describe('../src/src/003/largest-prime-factor', () => {
  let sut;
  beforeEach(() => {
      sut = require('./../../src/003/largest-prime-factor').getLargestPrimeFactor;
  });

  describe('Given 600851475143', () => {
    const value = 600851475143;

    describe('When determining the larget prime factor', () => {
      let actual;
      beforeEach(() => {
         actual = sut(value);
      });

      it('should equal 486847', () => {
       expect(actual).toBe(486847);
      });
   });
  });
});
