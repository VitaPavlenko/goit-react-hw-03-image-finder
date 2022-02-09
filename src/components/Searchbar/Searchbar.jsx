import { Component } from 'react';

class Searchbar extends Component {
  state = {
    tags: '',
  };

  handleNameChange = event => {
    console.log(event.currentTarget.value);

    this.setState({ tags: event.currentTarget.value.toLowerCase() });
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.tags) return;
    this.props.changeSearch(this.state.tags);
  };

  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={this.onSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleNameChange}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
