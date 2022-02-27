// index.js

// The code below is temporary and can be commented out.
// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

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

const enterCoords = { latitude: '45.4499', longitude: '-73.8104' };

fetchISSFlyOverTimes(enterCoords, (error, flyOverTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Here are your flyover times: ', flyOverTimes);
});


