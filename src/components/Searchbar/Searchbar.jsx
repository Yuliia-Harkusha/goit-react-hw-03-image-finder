// import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Header, Form, Input, SearchButton } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Form onSubmit={onSubmit}>
        <SearchButton type="submit">
          <FaSearch size={14} />
        </SearchButton>
        <Input
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

// export class Searchbar extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     query: '',
//   };

//   handleChange = e => {
//     this.setState({ query: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { query } = this.state;
//     const { onSubmit } = this.props;

//     this.props.onSubmit({ ...this.state });
//     this.setState({ query: '' });

//     if (query.trim() === '') {
//       toast.warning('Enter a search request', {
//         position: toast.POSITION.TOP_RIGHT,
//         theme: 'colored',
//         autoClose: 3000,
//       });
//       return;
//     }

//     onSubmit({ ...this.state });
//     this.setState({
//       query: '',
//     });
//   };

//   render() {
//     const { query } = this.state;
//     const { handleChange, handleSubmit } = this;

//     return (
//       <Header>
//         <Form onSubmit={handleSubmit}>
//           <SearchButton type="submit" onClick={handleSubmit}>
//             <FaSearch size={14} />
//           </SearchButton>

//           <Input
//             value={query}
//             onChange={handleChange}
//             type="text"
//             autoFocus
//             autoComplete="off"
//             placeholder="Search images and photos"
//           />
//         </Form>
//       </Header>
//     );
//   }
// }
