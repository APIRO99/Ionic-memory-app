export interface Deck {
  id: number;
  title: string;
  photos: Array<string>;
}

export interface Game {
  id: number;
  time: number;
  errors: number;
  avatar: string;
  userId: string;
  boardSize: number;
}