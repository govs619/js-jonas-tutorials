'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
const YOUR_API_KEY = 'rc_live_0d7e645342a64eb08eb0ad9e0d7f187e';

/* function getCountries(country) {
  fetch(`https://api.restcountries.com/countries/v5/names.common/${country}`, {
    headers: {
      Authorization: `Bearer ${YOUR_API_KEY}`,
    },
  })
    .then(res => res.json())
    .then(data => data.data.objects[0].borders[0])
    .then(code =>
      fetch(
        `https://api.restcountries.com/countries/v5/codes.alpha_3/${code}`,
        {
          headers: {
            Authorization: `Bearer ${YOUR_API_KEY}`,
          },
        },
      )
        .then(response => response.json())
        .then(data => console.log(data.data.objects[0].names.common)),
    );
}
getCountries('India'); */

/* async function getCountriesAndNeighbour(country) {
  try {
    const response = await fetch(
      `https://api.restcountries.com/countries/v5/names.common/${country}`,
      {
        headers: {
          Authorization: `Bearer ${YOUR_API_KEY}`,
        },
      },
    );
    const {
      data: { objects: obj },
    } = await response.json();
    const nCode = obj[0].borders[0];
    const response1 = await fetch(
      `https://api.restcountries.com/countries/v5/codes.alpha_3/${nCode}`,
      {
        headers: {
          Authorization: `Bearer ${YOUR_API_KEY}`,
        },
      },
    );
    const {
      data: { objects: obj1 },
    } = await response1.json();
    // console.log(obj1[0].names.common);
    return obj1[0].names.common;
  } catch (e) {
    // console.error(e.message);
  }
} */

// const cName = getCountriesAndNeighbour('India').then(res => console.log(res));

/* const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err)); */

/* const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 sec');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 sec')); */

/* const getJson = async function (url, errorMsg = 'Something went wrong') {

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${YOUR_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    throw new Error(errorMsg, { cause: e });
  }
};

async function getCapitals(...countries) {
  try {
    const results = await Promise.all(
      countries.map(country =>
        getJson(
          `https://api.restcountries.com/countries/v5/names.common/${country}`,
        ),
      ),
    );
    console.log(results);
    const capitals = results.map(
      ({ data: { objects } }) => objects[0].capitals[0].name,
    );

    console.log(capitals);
  } catch (e) {
    console.error(e.message);
  }
}
const countries = ['India', 'Nepal', 'China'];
getCapitals(...countries);
 */

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

async function getCountryInfo(country) {
  const response = fetch(
    `https://api.restcountries.com/countries/v5/names.common/${country}`,
    {
      headers: {
        Authorization: `Bearer ${YOUR_API_KEY}`,
      },
    },
  );

  return (await response).json();
}

Promise.allSettled([
  getCountryInfo('India'),
  getCountryInfo('Nepal'),
  timeout(1),
]).then(data => console.log(data));
