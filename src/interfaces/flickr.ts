export interface INewImage {
  src: string;
}

export interface IImageData {
  farm: number,
  id: string,
  isfamily: number,
  isfriend: number,
  ispublic: number,
  owner: string,
  secret: string,
  server: string,
  title: string;
}

export interface IPromise {
  [key: string]: any;
}
