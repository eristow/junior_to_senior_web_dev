const fetch = require('node-fetch');
const swapi = require('./script2');

describe('getPeople', () => {
  it('should call swapi to get people', async () => {
    expect.assertions(1);
    const data = await swapi.getPeople(fetch);
    expect(data.count).toEqual(87);
  });

  // it('should call swapi to get people with a promise', (done) => {
  //   expect.assertions(1);
  //   swapi.getPeoplePromise(fetch).then((data) => {
  //     expect(data.count).toEqual(87);
  //     done();
  //   });

  it('should call swapi to get people with a promise', () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch).then((data) => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });

  it('should return count and results', () => {
    const mockFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () =>
          Promise.resolve({
            count: 87,
            results: [0, 1, 2, 3, 4, 5],
          }),
      })
    );

    expect.assertions(4);
    return swapi.getPeoplePromise(mockFetch).then((data) => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/people');
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });
});
