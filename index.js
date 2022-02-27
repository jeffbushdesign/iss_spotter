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


// Geo Coordinates to use with fetchISSFlyOverTimes
const geoCoords = { latitude: '45.4499', longitude: '-73.8104' };

// Define the callbackFunction
const callbackFunction = function (error, flyOverTimes) {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Here are your flyover times: ', flyOverTimes);
};

// Call the function
fetchISSFlyOverTimes(geoCoords, callbackFunction);


// (error, flyOverTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Here are your flyover times: ', flyOverTimes);
// }