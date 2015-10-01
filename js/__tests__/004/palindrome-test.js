jest.dontMock('./../../src/problems/004/palindrome');

describe('../src/src/problems/004/palindrome', () => {
  let sut;
  beforeEach(() => {
      sut = require('./../../src/problems/004/palindrome');
  });

  describe('When determining which two, three digit numbers\' product creates the larget palindrome', () => {
    let actual;
    beforeEach(() => {
       actual = sut.getLargestPalindrome();
    });

    it('should equal 906609', () => {
     expect(actual).toBe(906609);
    });
  });

  describe('When determining if a "906609" is a palindrome', () => {
    let actual;
    beforeEach(() => {
       actual = sut.isPalindrome("906609");
    });

    it('should equal true', () => {
     expect(actual).toBe(true);
    });
  });

  describe('When determining if a "walker" is a palindrome', () => {
    let actual;
    beforeEach(() => {
       actual = sut.isPalindrome("walker");
    });

    it('should equal false', () => {
     expect(actual).toBe(false);
    });
  });
});
