import { Component } from "react";
import SearchBar from "@Components/SearchBar";
import WorldMap from "@Components/WorldMap";
import Modal from "@Components/Modal";
import fetchCountryData from "@Services/fetchCountry";
import fetchNews from "@Services/fetchNews";
class App extends Component {
  state = {
    countryName: "",
    page: 1,
    isLoading: false,
    country: {},
    articles: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.countryName !== this.state.countryName) {
      this.getCountryData();
    }
  }

  handleFormSubmit = (countryName) => {
    this.setState({ countryName, page: 1, articles: [] });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  getCountryData = async () => {
    const { countryName, page } = this.state;
    try {
      this.setState({
        isLoading: true,
      });

      const data = await fetchCountryData(countryName);
      const news = await fetchNews(countryName, page);
      this.setState({ country: data, articles: news });
    } catch (error) {
      console.log(`There was an error${error}`);
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { country, articles } = this.state;
    const areArticlesLoaded = articles.length > 0;
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <WorldMap country={country} />
        <Modal country={country} articles={articles} />
      </>
    );
  }
}

export default App;
