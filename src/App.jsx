import { Component } from "react";
import SearchBar from "@Components/SearchBar";
import WorldMap from "@Components/WorldMap";
import Modal from "@Components/Modal";
import Layout from "@Components/Layout";
import Loader from "@Components/Loader";
import fetchCountryData from "@Services/fetchCountry";
import fetchNews from "@Services/fetchNews";
class App extends Component {
  state = {
    countryName: "",
    page: 1,
    isLoading: false,
    country: {},
    articles: [],
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.countryName !== this.state.countryName) {
      this.getCountryData();
      this.getArticles();
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
    const { countryName } = this.state;
    try {
      this.setState({
        isLoading: true,
      });

      const data = await fetchCountryData(countryName);
      this.setState({ country: data });
    } catch (error) {
      console.log(`There was an error${error}`);
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  getArticles = async () => {
    const { countryName, page } = this.state;

    try {
      this.setState({ isLoading: true });
      const news = await fetchNews(countryName, page);
      this.setState({ articles: news });
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { country, articles, isLoading } = this.state;
    const areArticlesLoaded = articles.length > 0;
    return (
      <>
        <Layout>
          {isLoading && <Loader />}
          <SearchBar onSubmit={this.handleFormSubmit} />
          <WorldMap country={country} />
          <Modal country={country} articles={articles} />
        </Layout>
      </>
    );
  }
}

export default App;
