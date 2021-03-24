process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

const fetch = require('node-fetch');
const url = 'https://swapi.py4e.com/api';

const getPeoplePromise = (fetch) => {
  return fetch(`${url}/people`)
    .then((response) => response.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
      };
    });
};

const getPeople = async (fetch) => {
  const response = await fetch(`${url}/people`);
  const data = await response.json();
  return {
    count: data.count,
    results: data.results,
  };
};

module.exports = {
  getPeople,
  getPeoplePromise,
};
