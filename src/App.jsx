import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import { Component } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import getFetch from './server/getFeach';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',

  //  - idle - запроса еще нет
  //   - pending - пошел запрос
  //   - resolved - успешный запрос
  //   - rejected - запрос с ошибкой
};
export default class App extends Component {
  state = {
    hits: [],
    newImput: 'cat',
    error: null,
    status: Status.IDLE,
    page: 1,
  };

  componentDidMount() {
    getFetch(this.state.newImput, this.state.page).then(data =>
      this.setState({ hits: [...data.hits] })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.newImput !== this.state.newImput ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: Status.PENDING });
      getFetch(this.state.newImput, this.state.page)
        .then(data => {
          if (!data.hits.length) {
            this.setState({ status: Status.REJECTED });
            return;
          }
          this.setState(prev => ({
            hits:
              this.state.page > 1 ? [...prev.hits, ...data.hits] : data.hits,
            status: Status.RESOLVED,
          }));
        })

        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  onClickButton = () => {
    // getFetch(this.state.newImput, this.state.page).then(data =>
    this.setState(prev => ({
      page: prev.page + 1,
      status: Status.RESOLVED,
    }));
  };

  changeSearch = newImput => {
    this.setState({ newImput, hits: [], page: 1 });
  };

  render() {
    const { hits, newImput, status } = this.state;

    return (
      <>
        <Searchbar changeSearch={this.changeSearch} />
        {status === 'idle' ? <div>Введите запрос ... </div> : null}
        {status === 'rejected' ? <div> Нет ответа по запросу</div> : null}

        {status === 'pending' && <Loader />}

        <>
          <ImageGallery carts={hits} />
          <Button onClickButton={this.onClickButton} />
        </>
      </>
    );
  }
}
