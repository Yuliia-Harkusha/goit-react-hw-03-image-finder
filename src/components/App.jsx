import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { getPhotos } from 'services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    items: [],
    loading: false,
    error: null,
    modalOpen: false,
    modalContent: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (query && prevState.query !== query) {
      this.onSearch();
    }

    if (query && prevState.query !== query) {
      getPhotos(query, page).then(response =>
        this.setState({
          items: response,
          page: page + 1,
          loading: false,
        })
      );
    }
  }

  onSearch = query => {
    this.setState({
      query,
      page: 1,
      loading: true,
    });
  };

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  openModal = () => {
    this.setState({
      modalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      modalContent: '',
    });
  };

  render() {
    const { items, loading, error, modalOpen } = this.state;
    const isPhotos = Boolean(items.length);
    const { onSearch, loadMore, openModal, closeModal } = this;
    return (
      <>
        <Searchbar onSubmit={onSearch} />
        {loading && <Loader />}
        {error && <p>Something went wrong...</p>}
        {modalOpen && <Modal onClose={closeModal}></Modal>}
        {isPhotos && <ImageGallery items={items} onClick={openModal} />}
        {isPhotos && <Button onClick={loadMore} />}
        {modalOpen && <Modal onClose={closeModal}></Modal>}
        <ToastContainer />
      </>
    );
  }
}
