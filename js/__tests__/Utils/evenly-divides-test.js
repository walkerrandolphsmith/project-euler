jest.dontMock('./../../src/problems/utils/Utils');

describe('../src/src/problems/utils/Utils/evenlyDivides', () => {
  let sut;
  beforeEach(() => {
      sut = require('./../../src/problems/utils/Utils').evenlyDivides;
  });

  describe('Given two positive non-zero values', () => {
    const value1 = 10;
    const value2 = 2;

    describe('When determining if 10 is evenly divisble by 2', () => {
      let actual;
      beforeEach(() => {
         actual = sut(value1, value2);
      });

      it('should be true', () => {
       expect(actual).toBe(true);
      });
   });
  });

  describe('Given the same positive non-zero values', () => {
    const value1 = 5;
    const value2 = 5;

    describe('When determining if 5 is evenly divisble by 5.', () => {
      let actual;
      beforeEach(() => {
         actual = sut(value1, value2);
      });

      it('should be true', () => {
       expect(actual).toBe(true);
      });
   });
  });

  describe('Given a positive even integer and a positive odd integer ', () => {
    const value1 = 4;
    const value2 = 5;

    describe('When determining if 4 is evenly divisble by 5.', () => {
      let actual;
      beforeEach(() => {
         actual = sut(value1, value2);
      });

      it('should be false', () => {
       expect(actual).toBe(false);
      });
   });
  });

  describe('Given a positive integer and a greater, positive integer ', () => {
    const value1 = 12;
    const value2 = 45;

    describe('When determining if 12 is evenly divisble by 45.', () => {
      let actual;
      beforeEach(() => {
         actual = sut(value1, value2);
      });

      it('should be false', () => {
       expect(actual).toBe(false);
      });
   });
  });
});
