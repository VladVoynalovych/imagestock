export interface IImageActivity {
  liked: boolean,
  disliked: boolean;
}

export interface IUserComment {
  userName: string,
  date: Date,
  text: string
}

export interface IGalleryItem {
  src: string,
  likes: number,
  dislikes: number,
  comments: Array<IUserComment>
}

export interface IGalleryState {
  images: Array<IGalleryItem>
}
