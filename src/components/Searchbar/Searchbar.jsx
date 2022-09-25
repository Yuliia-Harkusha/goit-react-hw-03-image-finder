import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { Header, Form, Input, SearchButton } from './Searchbar.styled';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query.trim() === '') {
      toast.warning('Enter a search request', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
        autoClose: 3000,
      });
      return;
    }

    onSubmit({ ...this.state });
    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <Header>
        <Form onSubmit={handleSubmit}>
          <SearchButton type="submit" onClick={handleSubmit}>
            <FaSearch size={14} />
          </SearchButton>

          <Input
            value={query}
            onChange={handleChange}
            type="text"
            autoFocus
            autoComplete="off"
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}
