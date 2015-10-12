jest.dontMock('./../../src/001/three-and-five');
jest.dontMock('./../../src/utils/Utils');

describe('../src/src/001/three-and-five', () => {
  let sut;
  beforeEach(() => {
      sut = require('./../../src/001/three-and-five').threeAndFive;
  });

  describe('Given values from 0 to 1000', () => {
    const max = 1000;

    describe('When summing the values that are multiples of 3 or 5', () => {
      let actual;
      beforeEach(() => {
         actual = sut();
      });

      it('should equal 468', () => {
       expect(actual).toBe(468);
      });
   });
  });
});
