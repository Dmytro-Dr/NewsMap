async function fetchCountryData(country) {
  const key = import.meta.env.VITE_COUNTRIES_API;
  return fetch(
    `https://api.restcountries.com/countries/v5?pretty=1&q=${country}`,
    {
      headers: {
        Authorization: `Bearer ${key}`,
      },
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error("Something went wrong"));
    })
    .then((response) => {
      const { objects } = response.data;
      console.log(objects);
      // API returns array, even if there is no such country,
      // therefore we check if there is something in array
      if (objects.length != 0) {
        // The problem here is that api return an array of objects,
        // when searching for Romania, we get Moldova at the first index
        // of array, therefore check is essensial, to get proper data,
        // I know how messy it looks :/, but I did not come up with sth better
        const object = objects.find(
          (object) =>
            toFindName(toNormalizeArray(object.names.alternates), country) ||
            object.names.common.toLowerCase() === country,
        );

        console.log(object);
        return object;
      }
      return Promise.reject(new Error(`There is no such country - ${country}`));
    });
}

export default fetchCountryData;

function toNormalizeArray(array) {
  return array.map((item) => item.toLowerCase());
}

function toFindName(array, countryName) {
  if (array.length !== 0 && array.find((name) => name === countryName)) {
    return true;
  }
  return false;
}
