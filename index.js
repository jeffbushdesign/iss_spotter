// index.js

// The code below is temporary and can be commented out.
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});

fetchCoordsByIP('192.0.231.222', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Here are your coordinates: ', coordinates);
});

