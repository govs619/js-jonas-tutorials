'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
const YOUR_API_KEY = 'rc_live_0d7e645342a64eb08eb0ad9e0d7f187e';

async function getCountries() {
  const response = await fetch(
    `https://api.restcountries.com/countries/v5/names.common/India`,
    {
      headers: {
        Authorization: `Bearer ${YOUR_API_KEY}`,
      },
    },
  );

  const { data } = await response.json();
  console.log(data.objects[0]);
  const { capitals, region } = data.objects[0];
  console.log(capitals[0].name, region);
}
getCountries();
