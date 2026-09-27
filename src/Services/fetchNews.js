async function fetchNews(country, page) {
  const key = import.meta.env.VITE_NEWS_API;
  return fetch(
    `https://newsapi.org/v2/everything?q=${country}&page=${page}&pageSize=5&language=en&apiKey=${key}`,
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject("Something went wrong");
    })
    .then(({ articles }) => articles);
}

export default fetchNews;
