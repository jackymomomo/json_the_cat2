const request = require('request');
// const path = process.argv[2];


const fetchBreedDescription = function(breed) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;
  request(url, (error, res, body) => {
    if (error) {
      console.log(error.message);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        console.log(null);
      } else {
        console.log(data[0].description);
      }
    }
  });
};
// fetchBreedDescription(path);
module.exports = { fetchBreedDescription };