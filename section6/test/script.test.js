const googleSearch = require('./script');

const dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

describe('googleSearch', () => {
  it('should pass', () => {
    expect('hello').toBe('hello');
  });

  it('should search google', () => {
    const result = googleSearch('dog', dbMock);
    expect(result).toEqual(['dog.com', 'dogpictures.com']);
  });

  it('should work with undef and null input', () => {
    const resultUndef = googleSearch(undefined, dbMock);
    expect(resultUndef).toEqual([]);

    const resultNull = googleSearch(null, dbMock);
    expect(resultNull).toEqual([]);
  });

  it('should not return more than 3 matches', () => {
    const result = googleSearch('.com', dbMock);
    expect(result.length).toEqual(3);
  });
});
