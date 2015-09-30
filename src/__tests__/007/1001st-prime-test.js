jest.dontMock('./../../app/problems/007/10001st-prime');

describe('../src/app/problems/007/10001st-prime', () => {
  let sut;
  beforeEach(() => {
      sut = require('./../../app/problems/007/10001st-prime');
  });
  describe('Given value 10001', () => {
    var value = 10001;

    describe('When determining the 10001st prime number', () => {
      let actual;
      beforeEach(() => {
         actual = sut.getNthPrime(value);
      });

      it('should equal 104743', () => {
       expect(actual).toBe(104743);
      });
    });
  });
});
