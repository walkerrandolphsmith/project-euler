jest.dontMock('./../../app/problems/005/smallest-multiple');
jest.dontMock('./../../app/problems/utils/Utils');

describe('../src/app/problems/005/smallest-multiple', () => {
  let sut;
  beforeEach(() => {
      sut = require('./../../app/problems/005/smallest-multiple');
  });
  describe('Given a range from 1 to 20', () => {
    var range = [1,20];

    describe('When determining the smallest positive number divisible by all numbers within range', () => {
      let actual;
      beforeEach(() => {
         actual = sut.smallestMultiple(range);
      });

      it('should equal 232792560', () => {
       expect(actual).toBe(232792560);
      });
    });
  });
});
