export interface INewImage {
  src: string,
  added: boolean;
}

export interface IAddImagePopupState {
  images: Array<INewImage>;
}
