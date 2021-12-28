export interface userComment {
  userName: string,
  date: Date,
  comments: Array<userComment>
}

export interface IGalleryItem {
  likes: number,
  dislikes: number,
  comments: Array<userComment>
}

export interface IGalleryState {
  images: Array<IGalleryItem>
}
