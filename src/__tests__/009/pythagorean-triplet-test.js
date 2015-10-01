jest.dontMock('./../../app/problems/009/pythagorean-triplet');

describe('../src/app/problems/009/pythagorean-triplet', () => {
  let sut;
  beforeEach(() => {
      sut = require('./../../app/problems/009/pythagorean-triplet');
  });

  describe('Given value 12', () => {
    var value = 12;

    describe('When determining the product of the pythogrean triplets whose values\'s sum is equal to the given value', () => {
      let actual;
      beforeEach(() => {
         actual = sut.getProductOfPythogreanTripletWhoseSumEquals(value);
      });

      it('should equal 60', () => {
       expect(actual).toBe(60);
      });
    });
  });
  describe('Given value 1000', () => {
    var value = 1000;

    describe('When determining the pythogrean triplet whose values\'s sum is equal to the given value', () => {
      let actual;
      beforeEach(() => {
         actual = sut.getProductOfPythogreanTripletWhoseSumEquals(value);
      });

      it('should equal 31875000', () => {
       expect(actual).toBe(31875000);
      });
    });
  });
});
