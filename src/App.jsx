import { Component } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import getFetch from './server/getFeach';
export default class App extends Component {
  state = {
    hits: [],
    newImput: null,
    isLoading: false,
  };

  componentDidMount() {
    getFetch(this.state.newImput).then(data =>
      this.setState({ hits: [...data.hits] })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.newImput !== this.state.newImput) {
      this.setCarts();
    }
  }

  setCarts = () => {
    this.setState({ isLoading: true });
    getFetch(this.state.newImput).then(data => {
      this.setState(prev => ({
        hits: [...prev.hits, ...data.hits],
        isLoading: false,
      }));
    });
  };

  changeSearch = newImput => {
    this.setState({ newImput, hits: [] });
  };

  render() {
    const { id, webformatURL, largeImageURL } = this.state.hits;

    return (
      <>
        <Searchbar changeSearch={this.changeSearch} />

        <ImageGallery carts={this.state.hits} />
      </>
    );
  }
}
