jest.dontMock('./../../src/002/fib');

describe('../src/src/002/fib', () => {
  let sut;
  beforeEach(() => {
      sut = require('./../../src/002/fib').calc;
  });

  describe('Given the fibonocci sequence', () => {

    describe('When summing the even-valued terms whose value do not exceed 4 million', () => {
      let actual;
      beforeEach(() => {
         actual = sut();
      });

      it('should equal 4613732', () => {
       expect(actual).toBe(4613732);
      });
   });
  });
});
