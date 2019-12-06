const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      const msg = `Page not found!`;
      callback(Error(msg), null);
    } else {
      // get the descriptio from the data
      const data = JSON.parse(body);
      // console.log('DATA', data);
      callback(null, data[0].description);
    }
  });
};

// if (error) {
//   console.log('Error Detected')
//   throw error
// };


// if (data.length === 0) {
//   console.log('Breed not found')
//   throw error
// };

// console.log(data[0].description);
// console.log(typeof data);
module.exports = { fetchBreedDescription };