import { INewImage, IImageData } from '@/interfaces/flickr';
import { search } from './http/FlickrHttpService';

async function uploadImages(keyword: string) {
  const images: Array<INewImage> = [];

  const searchResult = await search(keyword);

  searchResult.data.photos.photo.forEach((photo: IImageData) => {
    images.push(
      {
        src: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`,
      },
    );
  });

  return images;
}

export {
  uploadImages,
};
