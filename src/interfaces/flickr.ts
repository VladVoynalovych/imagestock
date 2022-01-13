export interface INewImage {
  src: String,
}

export interface IImageData {
  farm: Number,
  id: String,
  isfamily: Number,
  isfriend: Number,
  ispublic: Number,
  owner: String,
  secret: String,
  server: String,
  title: String,
}

export interface IPromise {
  [key: string]: any;
}
