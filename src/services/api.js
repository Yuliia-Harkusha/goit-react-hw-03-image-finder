import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '30152424-e1dc458b5c9ee44713f6c07f7';
const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

export const getPhotos = async (query, page) => {
  const response = await axios.get(
    `${URL}?key=${KEY}&q=${query}&page=${page}${FILTER}`
  );
  return response.data;
};
