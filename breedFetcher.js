const request = require('request');
const fs = require('fs');

const args = process.argv;
request(`https://api.thecatapi.com/v1/breeds/search?q=${args[2]}`, (error, Response, body) => {

  if (error) {
    console.log('Error Detected')
    throw error
  };

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log('Breed not found')
    throw error
  };

  console.log(data[0].description);
  console.log(typeof data);


});



