import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    if ((query && prevState.query !== query) || page > prevState.page) {
      this.fetchImages(query, page);
    }
  }

  async fetchImages() {
    const { query, page } = this.state;
    this.setState({
      loading: true,
    });

    try {
      const data = await getPhotos(query, page);
      this.setState(({ items }) => {
        return {
          items: [...items, ...data.hits],
        };
      });
    } catch (error) {
      this.setState({
        error,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { value, name } = e.target.elements.query;
    if (value.trim() === '') {
      toast.warning('Enter a search request', {
        theme: 'colored',
        autoClose: 3000,
      });
      return;
    }
    if (value.length !== 0 && value !== this.state.query) {
      this.setState({
        [name]: value,
        items: [],
        page: 1,
      });
    }
  };

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  openModal = modalContent => {
    this.setState({
      modalOpen: true,
      modalContent: modalContent.largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      modalContent: '',
    });
  };

  render() {
    const { items, loading, error, modalOpen, modalContent } = this.state;
    const { handleSubmit, loadMore, openModal, closeModal } = this;
    const isPhotos = Boolean(items.length > 0);

    return (
      <>
        <Searchbar onSubmit={handleSubmit} />
        {loading && <Loader />}
        {error && <p>Something went wrong...</p>}
        {isPhotos && <ImageGallery items={items} onClick={openModal} />}
        {isPhotos && <Button onClick={loadMore} />}
        {modalOpen && (
          <Modal onClose={closeModal}>
            <img src={modalContent} alt="" />
          </Modal>
        )}
        <ToastContainer />
      </>
    );
  }
}
