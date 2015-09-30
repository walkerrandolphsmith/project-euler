jest.dontMock('./../../app/problems/006/difference-sumofsquares-squareofsums');

describe('../src/app/problems/006/difference-sumofsquares-squareofsums', () => {
  let sut;
  beforeEach(() => {
      sut = require('./../../app/problems/006/difference-sumofsquares-squareofsums');
  });
  describe('Given value 100', () => {
    var value = 100;

    describe('When determining the difference of the sum of the squares and the square of the sum', () => {
      let actual;
      beforeEach(() => {
         actual = sut.differenceSumOfSquaresAndSquareOfSums(value);
      });

      it('should equal 25164150', () => {
       expect(actual).toBe(25164150);
      });
    });
  });

  describe('Given value 100', () => {
    var value = 100;

    describe('When determining the sum of the squares from 0 to 100', () => {
      let actual;
      beforeEach(() => {
         actual = sut.SumOfSquares(value);
      });

      it('should equal 338350', () => {
       expect(actual).toBe(338350);
      });
    });
  });

  describe('Given value 100', () => {
    var value = 100;

    describe('When determining the square of the sum from 0 to 100', () => {
      let actual;
      beforeEach(() => {
         actual = sut.SquareOfSums(value);
      });

      it('should equal 25502500', () => {
       expect(actual).toBe(25502500);
      });
    });
  });
});
