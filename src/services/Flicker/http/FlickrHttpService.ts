import axios from 'axios';

import { IPromise } from '@/interfaces/flickr';

import flickrConfig from '@/configs/flickr';

const REQUEST_URL = 'https://www.flickr.com/services/rest/?method=';
const METHODS = {
  SEARCH: 'flickr.photos.search',
};

async function search(keyword: string): Promise<IPromise> {
  const reqBody = `api_key=${flickrConfig.key}&text=${keyword}&format=json&nojsoncallback=1&per_page=10`;

  const reqResult = await axios.get(`${REQUEST_URL}${METHODS.SEARCH}&${reqBody}`);
  return reqResult;
}

export {
  search,
};
