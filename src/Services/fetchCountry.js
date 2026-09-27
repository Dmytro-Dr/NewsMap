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
      // API returns array, even if there is no such country,
      // therefore we check if there is something in array
      if (objects.length != 0) {
        // The problem here is that api return an array of objects, 
        // when searching for Romania, we get Moldova at the first index
        // of array, therefore check is essensial, to get proper data,
        // I know how messy it looks :/, but I did not come up with sth better
        const object = objects.filter((object) =>
          object.names.common.toLowerCase() === (country),
        );
        // index is there because filter() returns an array
        return object[0];
      }
      return Promise.reject(new Error(`There is no such country - ${country}`));
    });
}

export default fetchCountryData;
