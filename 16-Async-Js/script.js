'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
const YOUR_API_KEY = 'rc_live_0d7e645342a64eb08eb0ad9e0d7f187e';

/* const timeout = function (sec) {
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

Promise.all([
  getCountryInfo('India'),
  getCountryInfo('Nepal'),
  timeout(10),
]).then(data => console.log(data)); */

/* async function getCountiresAndNeighbours(country) {
  try {
    const response = await fetch(
      `https://api.restcountries.com/countries/v5/names.common/${country}`,
      {
        headers: {
          Authorization: `Bearer ${YOUR_API_KEY}`,
        },
      },
    );

    const body = await response.json();
    const neighbour = body.data.objects[0]?.borders?.[0];
    console.log(neighbour);

    const neighbourResponse = await fetch(
      `https://api.restcountries.com/countries/v5/codes.alpha_3/${neighbour}`,
      {
        headers: {
          Authorization: `Bearer ${YOUR_API_KEY}`,
        },
      },
    );
    const neighbourBody = await neighbourResponse.json();
    const neighbourData = neighbourBody.data.objects[0]?.names?.common;
    console.log(neighbourData);
  } catch (err) {
    console.error(err);
  }
}

getCountiresAndNeighbours('India'); */

/* const getJson = async function (url, property) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${YOUR_API_KEY}`,
    },
  });

  const resBody = await response.json();
  console.log(resBody);

  if (resBody.data?.objects?.length === 0) {
    throw new Error('Country not found');
  }
  console.log(resBody.data.objects[0]?.[property]);
  return Promise.resolve(resBody.data.objects[0]?.[property]);
}; */

/* const getCountry = async function (country) {
  try {
    // country1
    const response1 = await getJson(
      `https://api.restcountries.com/countries/v5/names.common/${country}`,
      'borders',
    );
    const [neighbourCode] = response1;

    console.log(`Neighbour of ${country}: ${neighbourCode}`);

    if (!neighbourCode) throw new Error('No neighbour found');

    // country 2
    const response2 = await getJson(
      `https://api.restcountries.com/countries/v5/codes.alpha_3/${neighbourCode}`,
      'names',
    );
    const { common: neighbourName } = response2;

    console.log(`Neighbour data of ${country}: ${neighbourName}`);
  } catch (err) {
    console.log(`${err} 🔥🔥🔥`);
  } finally {
    console.log('Fetching ended');
  }
}; */

/* const getCountry = async function (lat, lon) {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`,
    );
    const data = await response.json();
    const { countryName, city } = data;
    if (!countryName) {
      throw new Error('Country not found');
    }
    console.log(`You are in ${city}, ${countryName}`);

    const countryResponse = await fetch(
      `https://api.restcountries.com/countries/v5/names.common/${countryName}`,
      {
        headers: {
          Authorization: `Bearer ${YOUR_API_KEY}`,
        },
      },
    );
    const countryData = await countryResponse.json();
    if (!countryData || countryData.data?.objects?.length === 0) {
      throw new Error('Country Details not found');
    }
    console.log(countryData.data?.objects?.[0].names?.common);
  } catch (err) {
    console.error(`${err}: Failed to fetch location data`);
  }
}; */

/* const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is starting...');
  setTimeout(function () {
    if (Math.random() > 0.5) {
      resolve('Success');
    } else {
      reject(new Error('You lost your money'));
    }
  }, 1000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err)); */

/* const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('I waited 1 second');
    return wait(1);
  })
  .then(() => {
    console.log('I waited 1 more second');
    return wait(1);
  })
  .then(() => {
    console.log('I waited 1 more second');
  }); */

// Promise.resolve('Resolved value').then(res => console.log(res));

/* const whereAmI = async function (country) {
  try {
    const response = await fetch(
      `https://api.restcountries.com/countries/v5/names.common/${country}`,
      {
        headers: {
          Authorization: `Bearer ${YOUR_API_KEY}`,
        },
      },
    );
    const data = await response.json();
    const neighbour = data.data?.objects?.[0].borders?.[0];
    console.log(neighbour);

    const neighbourResponse = await fetch(
      `https://api.restcountries.com/countries/v5/codes.alpha_3/${neighbour}`,
      {
        headers: {
          Authorization: `Bearer ${YOUR_API_KEY}`,
        },
      },
    );
    const neighbourData = await neighbourResponse.json();

    console.log(neighbourData);
    return neighbour;
  } catch (err) {
    console.log(`${err} 🔥🔥🔥`);
  }
};

console.log('Start');
whereAmI('India').then(res => console.log('Response: ', res));
console.log('End'); */

const getJson = async function (url, errMsg = 'Someting went Wrong') {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${YOUR_API_KEY}`,
      },
    });

    return response.json();
  } catch (err) {
    console.error(`${err}`);
    throw err;
  }
};

const timeout = async function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Something went wrong'));
    }, seconds * 1000);
  });
};

//Parallel Promises
const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.any([
      getJson(`https://api.restcountries.com/countries/v5/names.common/${c1}`),
      getJson(`https://api.restcountries.com/countries/v5/names.common/${c2}`),
      getJson(`https://api.restcountries.com/countries/v5/names.common/${c3}`),
      timeout(3),
    ]);

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

get3Countries('India', 'Nepal', 'Qatar');
